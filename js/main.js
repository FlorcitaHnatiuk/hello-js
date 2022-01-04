const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    switchButton.classList.toggle('active');
});

/*condicional para chequear de que año es la patente?*/
let espacio = " "
let nombre = prompt("Tu nombre");
let apellido= prompt("Y tu apellido?");
let patente = parseInt(prompt("ingresá tu patente"));

let saludo = alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!`);


/*contraseña*/
let pass = prompt("ingresá tu contraseña:");
let wrongPass = "";
while (wrongPass != pass){
    wrongPass = prompt("Ingrese nuevamente su contraseña");
}
let welcome = alert(`Bienvenidx${espacio}${nombre}`);

/*carrito de compras*/




//for incremental
// for (let i = 0; i<10; i++) {
//     alert (i);
// }

//for decremental
// for (let index = 10; i >= 0; i--) {
//     alert (i);
// }


// let temperatura = parseInt(prompt("Cuantos grados hacen?"));
// let clima = prompt("Como está el cielo?");

//     if (temperatura >= 30&&clima=="soleado") {
//         alert("Que calor! andate a la pile!");
//     }
//     else if (temperatura < 30&&clima=="soleado") {
//         alert("Clima ideal");
//     }
//     else if (temperatura <= 10&&clima=="nublado") {
//         alert("Está re feo, quedate mirando pelis");
//     }
//     else if (temperatura <= 10&&clima=="soleado") {
//         alert("Abrigate y salí a pasear!");
//     }     
//     else {
//         alert("Que frio!!!");
//     } 