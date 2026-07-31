const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  auth: {
    login: (username, password) => ipcRenderer.invoke('auth:login', { username, password })
  },
  sales: {
    create: (data) => ipcRenderer.invoke('db:sale:create', data),
    list: () => ipcRenderer.invoke('db:sale:list')
  },
  store: {
    get: (key) => ipcRenderer.invoke('db:kv:get', key),
    set: (key, value) => ipcRenderer.invoke('db:kv:set', { key, value })
  },
  // Retrocompatibilidade temporária restrita com validação de segurança
  openExternal: (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        ipcRenderer.send('open-external', url);
      } else {
        console.error('Bloqueado protocolo inseguro:', parsed.protocol);
      }
    } catch (e) {
      console.error('URL inválida:', url);
    }
  }
});