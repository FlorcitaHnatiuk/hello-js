
//USUARIO => session se pierde, local persiste. 
localStorage.setItem('nombre', 'Florencia');
localStorage.setItem('apellido', 'Hnatiuk');
localStorage.setItem('marca', 'Ford');
localStorage.setItem('modelo', 'Ka');
localStorage.setItem('patente', 'AA181GI');

let nombre = localStorage.getItem('nombre');
let apellido = localStorage.getItem('apellido');
let marca = localStorage.getItem('marca');
let modelo = localStorage.getItem('modelo');
let patente = localStorage.getItem('patente');
console.log(nombre);
console.log(apellido);
console.log(marca);
console.log(modelo);
console.log(patente);

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("nombre: " + clave);
    console.log("info: " + localStorage.getItem(clave));
} 


//NIGHT AND DAY
const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

let espacio = " ";
// let nombre;
// let apellido;
// let marca;
// let modelo;
// let patente;
let ingreso = true; 


// CREAR UNA FUNCION QUE DIGA TIEMPO ESTIMATIVO QUE LLEVARÁ EL TRABAJO SEGUN SERVICIOS SELECCIONADOS

/* 
let jobToDo = parseInt(prompt("cuantas cosas le querés hacer a tu auto?"));
let time = 0.15;
const howLong = (jobToDo, time) => jobToDo * time;
alert(howLong(jobToDo, time)); */


// CREACION DE USUARIO

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

const usuario1 = new Usuario (

    nombre = prompt("Ingresá tu nombre"),
    apellido = prompt("Ingresá tu apellido?"),
    email = prompt("Ingresá tu email").toLowerCase(),
    marca = prompt("Cuál es la marca de tu auto?"),
    modelo = prompt("Y el modelo?"),
    patente = prompt("Por último, la patente!").toUpperCase()
    
)

// PATENTE VIEJA O NUEVA?
console.log(`${patente} ${patente.length}`);

function añoPatente() {
    if (patente.length == 6) {
        alert("tu patente es previa al 2016")
    } else if (patente.length == 7) {
        alert("tu patente es posterior al 2016")
    }
} 
añoPatente();

// HELLO HELLO!
function saludo() {
    alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!. Tu ${marca}${espacio}${modelo} patente ${patente}, ya tiene su usuario creado correctamente.`);
}
saludo(); 

// CONTRASEÑA CON VALIDACIÓN

/* var pass = prompt("Creá tu contraseña:");
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
} */


// SELECCIONAR TRABAJOS

const workToDo = [];
let entry = prompt("Que trabajos vas a necesitar?");
while (entry != "ESC") {
    entry = prompt("Que trabajos vas a necesitar? Escribí ESC si ya tiene todos los servicios seleccionados.");
    workToDo.push(entry);
}

for (let i = 0; i < workToDo.length; i++) {
    alert("Seleccionaste " + workToDo[i]);
}

workToDo.join(`+`); 

// Creación de servicios => mandar a JSON?

const servicios = [
    {id: 1, Nombre: "Llantas", Precio: "80000", Tiempo: 2},
    {id: 2, Nombre: "Neumáticos", Precio: "20000", Tiempo: 1},
    {id: 3, Nombre: "Frenos", Precio: "25000",Tiempo: 3},
    {id: 4, Nombre: "Alineación y balanceo", Precio: "10000",Tiempo: 5},
    {id: 5, Nombre: "Motor", Precio: "80000", Tiempo: 12},
    {id: 6, Nombre: "Service", Precio: "60000",Tiempo: 2}
] 

// Ordenar de menor a mayor los precios de los servicios

const menorMayor = servicios.sort((servicio1, servicio2) => {
    return servicio1.Precio - servicio2.Precio
})
console.log(menorMayor); 

// Ordenar de mayor a menor los precios
/* const mayorMenor = servicios.sort((servicio1, servicio2) => {
    return servicio2.Precio - servicio1.Precio
})

console.log(mayorMenor); */


