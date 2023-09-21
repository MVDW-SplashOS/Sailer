function setGlobal(name, value){
    window.SAILER[name] = value;
}

function getGlobal(name){
    if(window.SAILER.hasOwnProperty(name)){
        return window.SAILER[name];
    }
    return null;
}

export { setGlobal, getGlobal}
