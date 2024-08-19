let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

     if (numeroDeUsuario === numeroSecreto) {
          asignarTextoElemento(
               "p",
               `acertaste el Número Secreto en ${intentos} ${intentos === 1 ? `vez` : `veces`
               }`
          );

          document.getElementById("reiniciar").removeAttribute("disabled");
     } else {
          //el usuario no acertó.
          if (numeroDeUsuario > numeroSecreto) {
               asignarTextoElemento("p", "El número es menor");
          } else {
               asignarTextoElemento("p", "El número secreto es Mayor");
          }
          intentos++;
          limpiarCaja();
     }
     return;

}
function limpiarCaja() {
     document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //si ya sorteamos todos los numeros
     if(listaNumerosSorteados.length == numeroMaximo){
          asignarTextoElemento("p", "Ya se sosrtearon todos los Números posibles");

     } else{
          if(listaNumerosSorteados.includes(numeroGenerado)) {
               return generarNumeroSecreto();
            } else {          
                 listaNumerosSorteados.push(numeroGenerado);
                 return numeroGenerado;
            }
     }
     //si el numero generado está en la lista hacer esto!     
     
}

function condicionesIniciales() {
     asignarTextoElemento("h1", "Juego del número secreto");
     asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}

function reiniciarJuego() {
     //Limpiar la caja
     limpiarCaja();
     //indicar mensaje de intervalo de número
     // Generar número aleatorio
     //inicializar el número de intentos
     condicionesIniciales();
     //Deshabilitar botón de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
