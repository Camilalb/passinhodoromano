var msg = document.getElementById('msg')
var incremento = document.getElementById('desloc')
var escolha = document.getElementById('escolha')
var result =""
var msgCodificada = document.getElementById('msgCodificada')

document.getElementById("escolha").onclick = selecionaOpcao;
function selecionaOpcao(event){    
    event.preventDefault()
    var selecionado = document.getElementById("selecao");
	var valorSelecionado = selecionado.value;    
    
    if (valorSelecionado == "cifra") {  
        if (escolha.textContent === "Codificar mensagem"){
            result = codificaCifra (msg.value,incremento.value)
            msgCodificada.textContent = result
        }
        else {
            result = decodificaCifra (msg.value, incremento.value)
            msgCodificada.textContent = result
        }   

    } else if (valorSelecionado == "base") {
        if (escolha.textContent === "Codificar mensagem"){
            codificaBase (msg.value,incremento.value)
        }
        else {
            decodificaBase (msg.value, incremento.value)
        }         
    
    }
}
// Bloco de comando para codificar em Cifra de Cesar
function codificaCifra (msg, incremento){
    // Separa o texto 
    msg = msg.split("")
    var msgCodificada = []
    var msgFinal = []
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            msgCodificada.push(((msg2 - 65 + incremento)%26)+65)
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
function decodificaCifra (msg, incremento){
    msg = msg.split("")
    var msgCodificada = []
    var msgFinal = []
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            msgCodificada.push(((msg2 - 97 - incremento)%26)+97)
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

var msgCod = document.getElementById('codificar')
msgCod.addEventListener ('click', function(){
    escolha.textContent ='Codificar mensagem'
})
// pelo id do botão, chamar add Event Listener
var msgDec = document.getElementById('decodificar')
msgDec.addEventListener ('click', function(){
    escolha.textContent ='Decodificar mensagem'
})
