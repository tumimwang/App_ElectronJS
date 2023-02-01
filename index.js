const {app, BrowserWindow} = require('electron');
const path = require('path');

function createMainWQindow() {
  const mainWindow = new BrowserWindow({
    title: 'PCWANG',
    width:500,
    height:600
  });

  mainWindow.loadFile(path.join(__dirname, './render/index.htmnl'));

}

app.whenReady().then(()  => {
  createMainWindow();

});