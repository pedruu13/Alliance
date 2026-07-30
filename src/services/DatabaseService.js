// Abstração do Banco de Dados para o Frontend
// Este serviço será o único ponto de comunicação com o Backend (SQLite)

window.DatabaseService = class DatabaseService {
  static async login(username, password) {
    if (window.api && window.api.invoke) {
      return await window.api.invoke('auth:login', { username, password });
    } else {
      console.warn('Rodando sem Backend IPC. Fallback para simulação.');
      const usersRaw = localStorage.getItem('alliancea_users');
      if (usersRaw) {
        const users = JSON.parse(usersRaw);
        const usr = users[username.toLowerCase()];
        if (usr && usr.pass === password) {
          return { success: true, user: usr };
        }
      }
      return { success: false, error: 'Usuário ou senha incorretos (Fallback).' };
    }
  }

  static async saveSale(saleData) {
    if (window.api && window.api.invoke) {
      return await window.api.invoke('db:sale:create', saleData);
    }
    return true; 
  }

  static async getSales() {
    if (window.api && window.api.invoke) {
      return await window.api.invoke('db:sale:list');
    }
    return [];
  }

  static async getStore(key) {
    if (window.api && window.api.invoke) {
      const response = await window.api.invoke('db:kv:get', key);
      if (response && response.success && response.data) {
        return JSON.parse(response.data);
      }
    }
    // Migration fallback: se não achou no SQLite, busca no localStorage
    const local = localStorage.getItem(key);
    if (local) {
      const parsed = JSON.parse(local);
      // Salva no SQLite para a próxima vez (migração transparente)
      this.setStore(key, parsed).catch(e => console.warn('Erro ao migrar KV para SQLite:', e));
      return parsed;
    }
    return null;
  }

  static async setStore(key, value) {
    const stringValue = JSON.stringify(value);
    if (window.api && window.api.invoke) {
      const response = await window.api.invoke('db:kv:set', { key, value: stringValue });
      if (response && response.success) {
        return true;
      }
    }
    // Fallback se IPC falhar
    localStorage.setItem(key, stringValue);
    return true;
  }
}
