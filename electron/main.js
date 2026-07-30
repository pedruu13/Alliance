const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { initDatabase, saveDatabase } = require('./database');

const registerAuthIPC = require('./ipc/auth.ipc');
const registerSalesIPC = require('./ipc/sales.ipc');
const registerDatabaseIPC = require('./ipc/database.ipc');

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
  
  // Registrar módulos IPC
  registerAuthIPC();
  registerSalesIPC();
  registerDatabaseIPC();

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  try { saveDatabase(); } catch(e) {}
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('open-external', (event, url) => {
  shell.openExternal(url);
});
