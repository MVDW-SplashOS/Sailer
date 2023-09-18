const {app, BrowserWindow, shell} = require('electron')
const path = require('path')
var mainWindow;

// Create window
function createWindow () {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 720,
		minHeight: 480,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			webSecurity: false,
			enableRemoteModule: true,
			sandbox: false,
			devTools: true,
			spellcheck: false
			
		}
	})
	mainWindow.setMenuBarVisibility(false)
	mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {

	createWindow()
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
