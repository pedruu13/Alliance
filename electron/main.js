const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { initDatabase, getDb, saveDatabase } = require('./database');
const bcrypt = require('bcryptjs');

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.setMenuBarVisibility(false);

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(async () => {
  await initDatabase();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Garantir que salva no fechamento
  try { saveDatabase(); } catch(e) {}
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC listeners seguros
ipcMain.on('open-external', (event, url) => {
  shell.openExternal(url);
});

// Autenticação Segura
ipcMain.handle('auth:login', async (event, { username, password }) => {
  try {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM users WHERE username = :user');
    const user = stmt.getAsObject({ ':user': username });
    stmt.free();
    
    if (!user || !user.password_hash) {
      return { success: false, error: 'Usuário não encontrado' };
    }

    const match = bcrypt.compareSync(password, user.password_hash);
    if (match) {
      const { password_hash, ...safeUser } = user;
      return { success: true, user: safeUser };
    } else {
      return { success: false, error: 'Senha incorreta' };
    }
  } catch (error) {
    console.error('Erro de autenticação:', error);
    return { success: false, error: 'Erro interno no servidor' };
  }
});

// Vendas IPC
ipcMain.handle('db:sale:create', async (event, sale) => {
  try {
    const db = getDb();
    const sql = `
      INSERT INTO sales (date, time, client_name, client_phone, product_name, material, size1, size2, quantity, value, payment_method, installments, seller_name, status, obs)
      VALUES (:date, :time, :client_name, :client_phone, :product_name, :material, :size1, :size2, :quantity, :value, :payment_method, :installments, :seller_name, :status, :obs)
    `;
    db.run(sql, {
      ':date': sale.data,
      ':time': sale.hora,
      ':client_name': sale.cliente,
      ':client_phone': sale.tel || null,
      ':product_name': sale.produto,
      ':material': sale.material || null,
      ':size1': sale.tam1 || null,
      ':size2': sale.tam2 || null,
      ':quantity': sale.qtd || 1,
      ':value': sale.valor,
      ':payment_method': sale.pagamento || null,
      ':installments': sale.parcelas || null,
      ':seller_name': sale.vendedora || null,
      ':status': sale.status || 'ok',
      ':obs': sale.obs || null
    });
    saveDatabase();
    return { success: true };
  } catch(e) {
    console.error('Erro ao salvar venda:', e);
    return { success: false, error: e.message };
  }
});

// Key-Value Store IPC (Para DB e USERS globais da interface legada)
ipcMain.handle('db:kv:set', async (event, { key, value }) => {
  try {
    const db = getDb();
    const sql = "INSERT INTO json_store (key, value) VALUES (:key, :value) ON CONFLICT(key) DO UPDATE SET value = :value";
    db.run(sql, { ':key': key, ':value': value });
    saveDatabase();
    return { success: true };
  } catch(e) {
    console.error('Erro ao salvar no json_store:', e);
    return { success: false, error: e.message };
  }
});

ipcMain.handle('db:kv:get', async (event, key) => {
  try {
    const db = getDb();
    const result = db.exec("SELECT value FROM json_store WHERE key = '" + key.replace(/'/g, "''") + "'");
    if (result && result.length > 0 && result[0].values.length > 0) {
      return { success: true, data: result[0].values[0][0] };
    }
    return { success: true, data: null };
  } catch(e) {
    console.error('Erro ao buscar no json_store:', e);
    return { success: false, error: e.message };
  }
});
