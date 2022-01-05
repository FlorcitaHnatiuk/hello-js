const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    switchButton.classList.toggle('active');
});



let espacio = " ";
let nombre = prompt("Tu nombre");
let apellido= prompt("Y tu apellido?");
let patente = parseInt(prompt("ingresá tu patente"));

/*contraseña*/
var pass = prompt("Creá tu contraseña:");
let checkPass = prompt("ingresá tu contraseña nuevamente");
let intentos = 0;

while (checkPass != pass) {
    if (intentos <= 3) {
        alert = prompt("contraseña incorrecta, ingresala nuevamente");
    } else if (intentos > 3) {
        alert(`${nombre}${espacio}${apellido} ya no tenés mas intentos. Recarga la web!`);
        break; 
    }
    intentos++;
}
if (checkPass == pass){
    alert("contraseña correcta. Podés ingresar!");
}

let saludo = alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!`);


//for incremental
// for (let i = 0; i<10; i++) {
//     alert (i);
// }

//for decremental
// for (let index = 10; i >= 0; i--) {
//     alert (i);
// }
