// Abstração do Banco de Dados para o Frontend
// Este serviço será o único ponto de comunicação com o Backend (SQLite)

window.DatabaseService = class DatabaseService {
  static async login(username, password) {
    if (window.api) {
      return await window.api.auth.login(username, password);
    } else {
      console.error('IPC Inacessível. Login falhou.');
      return { success: false, error: 'Sistema offline. Não é possível autenticar no momento.' };
    }
  }

  static async saveSale(saleData) {
    if (window.api) {
      return await window.api.sales.create(saleData);
    }
    return true; 
  }

  static async getSales() {
    if (window.api) {
      return await window.api.sales.list();
    }
    return [];
  }

  static async getStore(key) {
    if (window.api) {
      const response = await window.api.store.get(key);
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
    if (window.api) {
      const response = await window.api.store.set(key, stringValue);
      if (response && response.success) {
        return true;
      }
    }
    return false;
  }
}
