// overlay.js

const { BrowserWindow, ipcMain } = require('electron');

let overlayWindow = null;

function createOverlayWindow() {
  // Create a new BrowserWindow for the overlay
  overlayWindow = new BrowserWindow({
    width: 300,
    height: 200,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the overlay content
  overlayWindow.loadFile('overlay.html');

  // Handle IPC messages from renderer process
  ipcMain.on('updateOverlay', (event, data) => {
    // Update overlay content with data received from renderer process
    overlayWindow.webContents.send('updateOverlay', data);
  });
}

module.exports = {
  createOverlayWindow
};
