const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

let espacio = " ";
let nombre = prompt("Tu nombre");
let apellido = prompt("Y tu apellido?");
let patente = parseInt(prompt("ingresá tu patente"));

/*contraseña*/
var pass = prompt("Creá tu contraseña:");
let checkPass = prompt("ingresá tu contraseña nuevamente");
let intentos = 0;

while (checkPass != pass) {
    if (intentos <= 3) {
        alert = prompt("contraseña incorrecta, ingresala nuevamente");
        checkPass = prompt("contraseña incorrecta, ingresala nuevamente");
    } else if (intentos > 3) {
        alert(`${nombre}${espacio}${apellido} ya no tenés mas intentos. Recarga la web!`);
        break;
    }
    intentos++;
}
if (checkPass == pass) {
    alert("contraseña correcta. Podés ingresar!");
}

function saludo() {
    alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!`);
}
saludo();

/*calculadora básica*/
let num1 = parseInt(prompt("Ingrese valor"));
let num2 = parseInt(prompt("Ingrese un valor"));
let operacion = prompt("ingrese tipo de operación");

function calculate(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return 0;
            break;
    }
}
alert(calculate(num1, num2, operacion));

let jobToDo = parseInt(prompt("cuantas cosas le querés hacer a tu auto?"));
let time = 0.15; //hora * jobToDo.
const howLong = (jobToDo, time) => jobToDo*time;
alert(howLong(jobToDo, time));