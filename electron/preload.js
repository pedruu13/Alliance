const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Exemplo de canais seguros
  send: (channel, data) => {
    let validChannels = ['db:query', 'auth:login'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ['db:result', 'auth:result'];
    if (validChannels.includes(channel)) {
      // Remover os ouvintes antigos para evitar memory leaks caso o componente renderize novamente
      ipcRenderer.removeAllListeners(channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  invoke: (channel, data) => {
    let validChannels = ['db:query', 'auth:login'];
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, data);
    }
  },
  // Retrocompatibilidade (temporário, se necessário para abrir links externos etc)
  openExternal: (url) => ipcRenderer.send('open-external', url)
});
