const{app,BrowserWindow,shell}=require('electron');
const path=require('path');
function create(){
 const w=new BrowserWindow({width:1280,height:800,minWidth:480,minHeight:400,title:'InkPad',icon:path.join(__dirname,'app','icons','icon-512.png'),backgroundColor:'#d9dde3',autoHideMenuBar:true});
 w.loadFile(path.join(__dirname,'app','index.html'));
 w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:'deny'}});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
