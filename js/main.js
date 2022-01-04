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
let contraseña = prompt("ingresá tu contraseña:");

//let saludo = alert("Hola " + nombre + " " + apellido + ". Gracias por sumarte a nuestra comunidad!")
//me gusta mas la siguiente forma! :)
switch (nombre) {
    case nombre:
        alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!`);
        break;
}

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

// let saludo = alert("Hola " + nombre + " " + apellido + ". Gracias por sumarte!");

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