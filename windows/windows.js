

const electron = require('electron');

window.addEventListener("load", () => {

  var windowsMinimize = [...document.getElementsByClassName("windows-minimize")]
  windowsMinimize.forEach(balsie => {
    balsie.addEventListener("click", () => {windowMinimize();});
  });

  var windowsMaximize = [...document.getElementsByClassName("windows-maximize")]
  windowsMaximize.forEach(balsie => {
    balsie.addEventListener("click", () => {windowMaximize();});
  });

  var windowsClose = [...document.getElementsByClassName("windows-close")]
  windowsClose.forEach(balsie => {
    balsie.addEventListener("click", () => {windowClose();});
  });
  
})

function windowClose() {
  var window = electron.remote.getCurrentWindow();
  window.close();
}

function windowMaximize() {
  var window = electron.remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();          
  } else {
    window.unmaximize();
  }
}

function windowMinimize() {
  var window = electron.remote.getCurrentWindow();
  window.minimize(); 
}