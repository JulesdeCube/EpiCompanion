const electron = require('electron');


function createWindow () {
  // Create the browser window.
  let win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    titleBarStyle: 'hidden'
  })

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/windows/windows.html');
  //win.loadURL('file://' + __dirname + '/app/app.html');
  win.webContents.openDevTools();
}

electron.app.on('ready', createWindow);