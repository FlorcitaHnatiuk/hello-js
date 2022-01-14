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
let ingreso = true;

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
alert(calculate(num1, num2, operacion));*/

/* 
let jobToDo = parseInt(prompt("cuantas cosas le querés hacer a tu auto?"));
let time = 0.15;
const howLong = (jobToDo, time) => jobToDo * time;
alert(howLong(jobToDo, time)); */


/*let costo = 0;
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


class Usuario {
    constructor(nombre, apellido, email, marca, modelo, patente) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.marca = marca,
            this.modelo = modelo,
            this.patente = patente
    }
}

const usuario1 = new Usuario(nombre = prompt("tu nombre?"),
    apellido = prompt("tu apellido?"),
    email = prompt("tu email"),
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


function campoVacio(cadena) {
    if (cadena == "") {
        return true;
    } else {
        return false;
    }
}

while (ingreso) {
    nombre = prompt("ingresa tu nombre");
    if (campoVacio(nombre)) {
        alert("No ingresaste tu nombre");
    } else {
        ingreso = false;
    }
}

ingreso = true

while (ingreso) {
    apellido = prompt("Ingresa tu apellido");
    if (campoVacio(apellido)) {
        alert("No ingresaste tu apellido");
    } else {
        ingreso = false;
    }
}

ingreso = true

while (ingreso) {
    email = prompt("Ingrese su email");
    if (campoVacio(email)) {
        alert("No ingresaste email");
    } else {
        ingreso = false;
    }
}

ingreso = true

while (ingreso) {
    marca = Number(prompt("Ingrese la marca de su vehículo"));
    if (campoVacio(marca)) {
        alert("No ingresó marca de su vehículo");
    } else {
        ingreso = false;
    }
}

ingreso = true

while (ingreso) {
    modelo = Number(prompt("Ingrese la marca de su vehículo"));
    if (campoVacio(modelo)) {
        alert("No ingresó modelo de su vehículo");
    } else {
        ingreso = false;
    }
}

ingreso = true

while (ingreso) {
    patente = Number(prompt("Ingrese la patente de su vehículo"));
    if (campoVacio(patente)) {
        alert("No ingresó la patente de su vehículo");
    } else {
        ingreso = false;
    }
}

ingreso = true

const workToDo = [];

let entry = prompt("Que trabajos vas a necesitar?");

while (entry != "ESC") {
    workToDo.push(entry);
    entry = prompt("Que trabajos vas a necesitar? Escribí ESC si ya tiene todos los servicios seleccionados.");
}

for (let i = 0; i < workToDo.length; i++) {
    alert("Seleccionaste " + workToDo[i]);
}



class Work {
    constructor(nombre, precio, tiempo) {
        this.nombre = nombre,
            this.precio = precio,
            this.tiempo = tiempo // son horas
    }
}

const trabajos = [];
trabajos.push(new Work("Motor", "80000", "9"));
trabajos.push(new Work("Frenos", "5000", "2"));
trabajos.push(new Work("Suspensión", "2000", "3"));
trabajos.push(new Work("Neumaticos", "60000", "2"));