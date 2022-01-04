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
let intentos = 1;
while (wrongPass != pass){
    wrongPass = prompt("Ingrese nuevamente su contraseña");
    if (intentos <= 3) {
        let welcome = alert(`Bienvenidx${espacio}${nombre}. La contraseña es correcta.`); 
    } else if (intentos >= 3) {
        let reject = alert(`${nombre}${espacio}la contraseña no es correcta. Recargá la web.`);
    } else {
        alert ("error");
    }
}

// let welcome = alert(`Bienvenidx${espacio}${nombre}`);

/*carrito de compras*/
for (let item = 0; item >= 1; item++) {
    alert (`${nombre}${espacio}, agregaste un item al carrito`);
}



//for incremental
// for (let i = 0; i<10; i++) {
//     alert (i);
// }

//for decremental
// for (let index = 10; i >= 0; i--) {
//     alert (i);
// }
