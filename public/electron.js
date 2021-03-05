const { app, BrowserWindow, Tray } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  const iconPath = path.join(__dirname, "chat.png");
  const appIcon = new Tray(iconPath);

  const win = new BrowserWindow({
    icon: iconPath,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
