var msg
var incremento

// Bloco de comando para codificar em Cifra de Cesar
function codificaCifra (){
    // Separa o texto 
    msg = msg.split("")
    var msgCodificada = []
    var msgFinal = []
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            msgCodificada.push(msg2 + incremento)
        }
        else {
            msgCodificada.push(msg2)
        }
    }
    for (var j=0; j<msgCodificada.length; j++){
        msgFinal.push(String.fromCharCode(msgCodificada[j]))
    
    }
    return msgFinal.join("") 
}

// Bloco de comando para decodificar em Cifra de Cesar
function decodificaCifra (){
    msg = msg.split("")
    var msgCodificada = []
    var msgFinal = []
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            msgCodificada.push(msg2 - incremento)
        }
        else {
            msgCodificada.push(msg2)
        }
    }
    for (var j=0; j<msgCodificada.length; j++){
        msgFinal.push(String.fromCharCode(msgCodificada[j]))    
    }
    return msgFinal.join("") 

}