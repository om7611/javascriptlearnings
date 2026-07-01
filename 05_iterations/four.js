const myobj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift'
}
for (const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
    
}
