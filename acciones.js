
function mostrar(mensaje){
    //var mensaje = document.querySelector("#texto");
    //alert("El mensaje escrito es "+mensaje);
    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){
    
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#imagenSinMensaje").style.display="none";
    document.querySelector("#sinMensaje").style.display="none";
    document.querySelector("#descpripcionSinMensaje").style.display="none";
    document.querySelector("#resultado").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";
    
    /* Este código generaba los elementos textarea y boton copiar cuando se encriptaba por primera vez
    document.querySelector("#mensajes").innerHTML =
    '<textarea maxlength="5000" cols="50" rows="11" id="resultado" class="texto"></textarea>' + 
    '<input type="submit" value="Copiar" class="copiar" id="copiar">';

    var copiar = document.querySelector("#copiar");
    copiar.onclick = copiarTexto;*/
}

function encriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var secreto="";

    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }

        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
}

function desencriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    var letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<5;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    
}

function copiarTexto(){
    var texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(texto.value);
}

var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");
document.querySelector(".astro").addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
})

copiar.onclick = copiarTexto;
encriptar.onclick = encriptarMensaje;
desencriptar.onclick = desencriptarMensaje;
