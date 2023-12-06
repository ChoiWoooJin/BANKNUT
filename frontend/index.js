const { app, BrowserWindow, globalShortcut } = require('electron');  // globalShortcut 추가
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
  });

  win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    details.responseHeaders['Content-Security-Policy'] = [
      "connect-src 'self' https://j9c206.p.ssafy.io"
      // 다른 지시문 설정
    ];
    callback({ cancel: false, responseHeaders: details.responseHeaders });
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  // 뒤로가기 단축키 등록
  const backShortcut = 'CommandOrControl+Left';
  globalShortcut.register('CommandOrControl+Left', () => {
    if (win.webContents.canGoBack()) { // 뒤로 갈 수 있는지 확인
      win.webContents.goBack(); // 뒤로 이동
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  // 단축키 등록이 app이 준비된 후에 이루어져야 함
  // 단축키 등록 로직은 여기에 추가
});

// 나머지 코드 (window-all-closed, activate 이벤트 핸들러 등)
