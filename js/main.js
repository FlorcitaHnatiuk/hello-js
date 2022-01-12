const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

let espacio = " ";
let nombre;
let apellido;
let marca;
let modelo;
let patente;

function saludo() {
    alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!. Tu ${marca}${espacio}${modelo} patente ${patente}, ya tiene su usuario creado correctamente.`);
}


/* let num1 = parseInt(prompt("Ingrese valor"));
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
const howLong = (jobToDo, time) => jobToDo * time;
alert(howLong(jobToDo, time));


let costo = 0;
let iva = 0.21;
let total = 0;
let costoFinal = 0;

function valor() {
    costo = parseInt(prompt("ingrese costo"));
    return costo;
}

function costoGondola (costo, iva) {
    total = costo * iva;
    return total;
}

function precioFinal (costo, total) {
    costoFinal = costo + total;
    return costoFinal;
}

valor();
costoGondola(costo, iva);
precioFinal(costo, total);
alert ("tu costo total es " + costoFinal); */


class Usuario{
    constructor(nombre, apellido, marca, modelo, patente) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.marca = marca,
        this.modelo = modelo,
        this.patente = patente
    }
}

const usuario1 = new Usuario 
    (nombre = prompt("tu nombre?"),
    apellido = prompt("tu apellido?"),
    marca = prompt("marca"),
    modelo = prompt("modelo"),
    patente = prompt("patente")
)

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

saludo();

class Work {
    constructor (precio, tiempo) {
        this.precio = precio,
        this.tiempo = tiempo
    }
}

const motor = new Work("60000", "8");
const suspension = new Work ("5000", "2");
const frenos = new Work ("3000", "1");
const llantas = new Work ("40000", "2");