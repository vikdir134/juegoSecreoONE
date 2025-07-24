let numeroSecreto = 0;
let intentos = 0;
let numerosUsados = [];
let numeroMaximo = 100;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento)
    titulo.innerHTML = texto;
    return;  
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
   // tiene que ser el mismo tipo de dato con los 3 iguales
   console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número secreto: ${numeroSecreto} en ${intentos}
        ${intentos == 1? "vez" : "veces"} `);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor que: ' + numeroDeUsuario);
        } else {
            asignarTextoElemento('p', 'El número secreto es menor que: ' + numeroDeUsuario);
        }
        limpiarCaja();
        intentos++;
    }  
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario')
   // valorCaja.value = '';
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (numerosUsados.length == numeroMaximo){
        asignarTextoElemento('p', 'No quedan números por probar, reinicia el juego');
    } else{
    if( numerosUsados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosUsados.push(numeroGenerado);
        return numeroGenerado; 
    }  
 }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    console.log(numerosUsados);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
