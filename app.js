let numeroSecreto;
let intentos;
let listaNumerosSortedos = []
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function  verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroUsuario ===numeroSecreto){
        asignarTextoElemento('p',`¡Felicidades! Has acertado el número en ${intentos} 
            ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
    }
    return;
}

function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSortedos);
    //si ya sorteamos todos los numeros
    if(listaNumerosSortedos.length===numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }   else{
        //si el  numero generado esta incluido en la lista
        if (listaNumerosSortedos.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSortedos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar nuevo número secreto
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();