var msg = document.getElementById('msg')

var incremento = document.getElementById('desloc')

var escolha = document.getElementById('escolha')

var result =""

var msgCodificada = document.getElementById('msgCodificada')

var selecionado = document.getElementById("selecao")

var boxdesloc = document.getElementById('boxdesloc')

document.getElementById("escolha").onclick = selecionaOpcao;


var msgCod = document.getElementById('codificar')
msgCod.addEventListener ('click', function(){
    escolha.textContent ='Codificar mensagem'
})


var msgDec = document.getElementById('decodificar')
msgDec.addEventListener ('click', function(){
    escolha.textContent ='Decodificar mensagem'
})


function selecionaOpcao(event){    
    event.preventDefault()
	var valorSelecionado = selecionado.value;    
    
    if (valorSelecionado == "cifra") {  
        if (escolha.textContent === "Codificar mensagem"){
            result = codificaCifra (msg.value,+incremento.value)
            msgCodificada.textContent = "O texto codificado é " + result
        }
        else {
            result = decodificaCifra (msg.value,+incremento.value)
            msgCodificada.textContent = "O texto decodificado é " + result
        }   

    } else if (valorSelecionado == "base") {
        
        if (escolha.textContent === "Codificar mensagem"){
            result = window.btoa(msg.value)
            msgCodificada.textContent = "O texto codificado é " + result
        }
        else {
            result = window.atob(msg.value)
            msgCodificada.textContent = "O texto decodificado é " + result
            console.log ("Caiu no decodifica Base")
        }         
    }
}

// Bloco de comando para codificar em Cifra de Cesar
function codificaCifra (msg, incremento){
    // Separa o texto 
    msg = msg.toLowerCase()
    msg = msg.split("")
    var msgCodificada = []
    var msgFinal = [] 
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            msgCodificada.push(((msg2 - 97 + incremento) % 26) + 97)
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
    msg = msg.toLowerCase()
    msg = msg.split("")
    var inc = Number(incremento)
    var msgCodificada = []
    var msgFinal = []
    
    for (var i=0; i< msg.length; i++){
        var msg2 = msg[i].charCodeAt()
        if ( msg2 !== 32 ){
            if ((msg2 - 97 - inc) >= 0){
                msgCodificada.push(((msg2 - 97 - inc)%26)+97)
                console.log(msgCodificada)
            }
            else {
                msgCodificada.push(((msg2 - 97 - inc)+26)+97)
                console.log(msgCodificada)
            }
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


selecionado.addEventListener('click', function desaparece(event){
    var valorSelecionado = selecionado.value; 
    event.preventDefault()
    if (valorSelecionado == "base") {
        return boxdesloc.style.display = 'none'
    }
    else {
        return boxdesloc.style.display = 'block'
    }
    
}) 