const {app,BrowserWindow}=require('electron');
function w(){const win=new BrowserWindow({width:1000,height:800,autoHideMenuBar:true,icon:__dirname+'/www/icon.png'});win.loadFile('www/index.html')}
app.whenReady().then(w);app.on('window-all-closed',()=>app.quit());
