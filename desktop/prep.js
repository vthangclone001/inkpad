const fs=require('fs'),path=require('path');
const src=path.join(__dirname,'..'),dst=path.join(__dirname,'app');
fs.rmSync(dst,{recursive:true,force:true});fs.mkdirSync(dst,{recursive:true});
for(const f of['index.html','manifest.webmanifest'])fs.copyFileSync(path.join(src,f),path.join(dst,f));
fs.cpSync(path.join(src,'icons'),path.join(dst,'icons'),{recursive:true});
