
/* 

Reglas de encriptación: 
     "e" es convertido para "-%&" 
     "i" es convertido para "i5#"
     "a" es convertido para "!@#"
     "o" es convertido para "また"
     "u" es convertido para "أو"
     Solo letras minusculas
     No se permite acentuación de palabras 
     */

/* 
Reglas de desencriptación: 
     "-%&" es convertido para "e" 
     "i5#" es convertido para "i"
     "!@#" es convertido para "a"
     "また" es convertido para "また"
     "أو" es convertido para "u"

Solo letras minusculas
No se permite acentuación de palabras   

*/

function encriptar(){
     var encriptarText = document.getElementById('input-texto').value; 
     var textEncriptado = encriptarText.replace(/e/gi, '-%&').replace(/i/gi, 'i5#').replace(/a/gi, '!@#').replace(/o/gi, 'また').replace(/u/gi, 'أو'); 
     document.getElementById("msg").value = textEncriptado 
     document.getElementById("input-texto").value=" "; 
     console.log(textEncriptado);
}

function desencriptar(){
     var desencriptarText= document.getElementById ("input-texto").value; 
     var textDesencriptado= desencriptarText.replace(/-%&/gi, "e"). replace(/i5#/gi, "i"). replace(/!@#/gi, "a").replace(/また/gi,"o").replace(/أو/gi, "u"); 
     document.getElementById("msg").value= textDesencriptado 
     document.getElementById("input-texto").value=""; 

} 

function copiar(){ var copyText = document.getElementById("msg"); copyText.select(); 
     document.execCommand("Copy"); document.getElementById("msg").value=" "; }