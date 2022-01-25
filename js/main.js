
alert ("Hola! los valores y tiempo que vas a ver son estimativos :)");

function saveUser(storage) {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let patente = document.getElementById('patente').value.toUpperCase();
    let password = document.getElementById('password').value;
    const usuario = {
        'nombre': nombre,
        'apellido': apellido,
        'email': email,
        'marca': marca,
        'modelo': modelo,
        'patente': patente,
        'password': password
    };
    console.log(usuario);
    if (storage === "sessionStorage") {
        sessionStorage.setItem("user", JSON.stringify(usuario));
    }
    if (storage === "localStorage") {
        localStorage.setItem("user", JSON.stringify(usuario))
    }
}

let button = document.getElementById("btnLogin");
button.addEventListener("click", clicked);

function clicked(){
    alert(`Hola${espacio}${document.getElementById('nombre').value}`);
}


function deleteUser(storage) {
    storage.clear();
}

let remember = document.getElementById('remember');

btnLogin.addEventListener("click", () => {
    if(remember.checked) {
        saveUser("localStorage");
    } else {
        saveUser("sessionStorage");
    }
});


//NIGHT AND DAY
const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

let espacio = " ";
let ingreso = true; 

// Cambiar titulo dependiendo del usuario ingresado

const element = document.getElementById("titulo")
element.innerHTML = "Bienvenido a nuestra web :)";

// CREAR UNA FUNCION QUE DIGA TIEMPO ESTIMATIVO QUE LLEVARÁ EL TRABAJO SEGUN SERVICIOS SELECCIONADOS

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

// Creación de servicios => mandar a JSON?

const servicios = [
    {id: 1, nombre: "Llantas",          precio: 80000,  tiempo: 2},
    {id: 2, nombre: "Neumáticos",       precio: 20000,  tiempo: 1},
    {id: 3, nombre: "Frenos",           precio: 25000 , tiempo: 3},
    {id: 4, nombre: "Alineación",       precio: 10000,  tiempo: 5},
    {id: 5, nombre: "Motor",            precio: 80000,  tiempo: 12},
    {id: 6, nombre: "Service",          precio: 60000,  tiempo: 2},
    {id: 7, nombre: "Balanceo",         precio: 2000,   tiempo: 1},
    {id: 8, nombre: "Amortiguadores",   precio: 2000,   tiempo: 1},
    {id: 9, nombre: "Pastillas",        precio: 2000,   tiempo: 1},
    {id: 10, nombre: "Bulones",         precio: 2000,   tiempo: 1},
    {id: 11, nombre: "Bujes",           precio: 2000,   tiempo: 1},
    {id: 12, nombre: "Cremallera",      precio: 80000,  tiempo: 2},
    {id: 13, nombre: "Bieletas",        precio: 80000,  tiempo: 2},
]

for (const servicio of servicios) {

    const container = document.createElement('div');
    container.classList.add('blocky');
    console.log(element.className);

    container.innerHTML = `

    <div class="text-center row">
        <div class="cart-items row-cols-md-6 g-2 ">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">${servicio.nombre}</span>
                    </div>
                    <span class="cart-price cart-column">$${servicio.precio}</span>
                    <div class="cart-quantity cart-column">
                        <button type="button" class="btn btn-success">+</button>
                    </div>
                </div>
            </div>
    </div>

    `;

    //document.body.appendChild(container);

    document.getElementById("serviceCart").appendChild(container);
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// ALMACENAR SERVICIOS 

for (const nombre of servicios) {
    guardarLocal(nombre.id, JSON.stringify(nombre));
}

// ALMACENAR ARRAY COMPLETO

guardarLocal("listaServicios", JSON.stringify(servicios));

let serviciosString = localStorage.getItem('listaServicios');
let serviciosParseados = JSON.parse(serviciosString);

// Ordenar de menor a mayor los precios de los servicios

const menorMayor = servicios.sort((servicio1, servicio2) => {
    return servicio1.precio - servicio2.precio
})
console.log(menorMayor);



