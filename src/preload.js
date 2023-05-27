const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  requireRblxClientToggle: (t) => {
    console.log("ev arg: "+t);
    ipcRenderer.send('sw-require-rblx-client-toggled', t);
  }
})