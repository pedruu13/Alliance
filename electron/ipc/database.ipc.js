const { ipcMain } = require('electron');
const { getDb, saveDatabase } = require('../database/index.js');

module.exports = function registerDatabaseIPC() {
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
};
