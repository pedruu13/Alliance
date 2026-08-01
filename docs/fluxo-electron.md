# O Fluxo do Electron

O ecossistema Electron pode apresentar gargalos de vulnerabilidade se mal configurado. O Alliance adota um fluxo severamente blindado.

## 1. Main Process (electron/main.js)
Aqui a aplicação "nasce". O sistema operacional dá luz ao processo.
- Ele cria a `BrowserWindow`.
- Ele bloqueia protocolos inseguros (`javascript:`, `file:`, etc) validando todas as saídas de rede (`will-navigate`).
- Ele desabilita o acesso do Node.js ao Front-end (`nodeIntegration: false`).

## 2. A Comunicação IPC (Inter-Process Communication)
Tudo no Electron deve fluir via IPC. O Front-end emite "sinais de fumaça" e o Back-end escuta.
No `main.js`, registramos canais (`ipcMain.handle`):
```javascript
ipcMain.handle('store-get', async (event, key) => {
  return await DatabaseService.getStore(key);
});
```

## 3. O Preload (electron/preload.js)
Este script possui "superpoderes" momentâneos: ele enxerga tanto o lado Node quanto o lado Janela (Browser).
Ele expõe funções pré-moldadas na `contextBridge`.

```javascript
contextBridge.exposeInMainWorld('api', {
    store: {
        get: (key) => ipcRenderer.invoke('store-get', key)
    }
});
```

Com essa triangulação, a aplicação garante que, mesmo que um hacker abra o console (F12) no PDV da joalheria, ele está limitado a invocar ações rigidamente filtradas por trás das chaves do `window.api`, nunca tendo posse direta dos imports de segurança.
