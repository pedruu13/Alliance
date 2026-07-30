const { ipcMain } = require('electron');
const bcrypt = require('bcryptjs');
const { getDb, saveDatabase } = require('../database/index.js');

module.exports = function registerAuthIPC() {
  ipcMain.handle('auth:login', async (event, { username, password }) => {
    try {
      const db = getDb();
      
      // First-Run Logic: Check if any users exist
      const countRes = db.exec('SELECT COUNT(*) as count FROM users');
      const count = countRes[0] ? countRes[0].values[0][0] : 0;
      
      if (count === 0 && username.toLowerCase() === 'admin') {
         // Create the admin user with the provided password
         const hash = bcrypt.hashSync(password, 10);
         db.run(`
           INSERT INTO users (username, password_hash, role, name, initials) 
           VALUES (?, ?, ?, ?, ?)
         `, ['admin', hash, 'gerente', 'Administrador', 'A']);
         saveDatabase();
         return { success: true, user: { username: 'admin', role: 'gerente', name: 'Administrador', initials: 'A' } };
      }

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
};
