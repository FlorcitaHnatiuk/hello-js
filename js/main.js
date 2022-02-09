$(() => {

    swal("Hola! los valores y tiempo que vas a ver son estimativos. Cualquier parecido con la realidad es pura coincidencia.");

    function saveUser(storage) {

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const patente = document.getElementById('patente').value.toUpperCase();
        const password = document.getElementById('password').value;

        const usuario = {
            'nombre': nombre,
            'apellido': apellido,
            'email': email,
            'marca': marca,
            'modelo': modelo,
            'patente': patente,
            'password': password
        };

        if (storage === "sessionStorage") {

            sessionStorage.setItem("user", JSON.stringify(usuario));

        } else {

            localStorage.setItem("user", JSON.stringify(usuario));

        }

    }
    
    let button = document.getElementById("btnLogin");
    button.addEventListener("click", clicked);
    
    function clicked(){

        console.log(`Hola${espacio}${document.getElementById('nombre').value}, gracias por sumarte. Tu 
        ${document.getElementById('marca').value}${espacio}${document.getElementById('modelo').value} ya tiene su usuario creado.`);

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
    
    // PATENTE VIEJA O NUEVA?
    
    //console.log(`${patente} ${patente.length}`);
    
    function añoPatente() {

        if (patente.length == 6) {

            alert("tu patente es previa al 2016");

        } else if (patente.length == 7) {

            alert("tu patente es posterior al 2016");

        }
    } 

    añoPatente(); 
    
    // Creación de servicios => mandar a JSON?
    let servicios = [
        {id: 1, nombre: "Llantas",          precio: 80000,  tiempo: 2},
        {id: 2, nombre: "Neumáticos",       precio: 20000,  tiempo: 1},
        {id: 3, nombre: "Frenos",           precio: 5990 ,  tiempo: 3},
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
        {id: 14, nombre: "Perno y buje",    precio: 80000,  tiempo: 2},
        {id: 15, nombre: "Rotula",          precio: 500,    tiempo: 1},
        {id: 16, nombre: "Depresor",        precio: 5990,   tiempo: 2},
        {id: 17, nombre: "Precap",          precio: 1883,   tiempo: 2},
        {id: 18, nombre: "Semiejes",        precio: 80000,  tiempo: 2},
        {id: 19, nombre: "Tren delantero",  precio: 11500,  tiempo: 6}
    ]
    
    for (const servicio of servicios) {
    
        const container = document.createElement('div');
        container.classList.add('blocky');
    
        container.innerHTML = `
        <div class="shop-items">
            <div class="shop-item text-center" >
                <h5 class="shop-item-title" id="${servicio.id}">${servicio.nombre}</h5>
                <div class="shop-item-details">
                    <p>$</p>
                    <p class="shop-item-price">${servicio.precio}</p> 
                </div>
                <div>
                    <span><button class="btn btn-primary shop-item-button" type="button">+</button></span>
                </div>
            </div>
        </div>
        `;
    
        document.getElementById("serviceCart").appendChild(container);

    }
    
    // ALMACENAR SERVICIOS 
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    for (const servicio of servicios) {

        guardarLocal(servicio.id, JSON.stringify(servicio));

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

    // Carrito

    let carrito = [];
    
    const items = document.getElementById('serviceCart')
    items.addEventListener('click', e => { 
        addCarrito(e);
    })
    
    const addCarrito = e => {
        if(e.target.classList.contains('btn-primary')) {
            setCarrito(e.target.parentElement.parentElement.parentElement)
        }
        e.stopPropagation();
    }
    
    const setCarrito = objeto => {
        
        const prod = {

            id: objeto.querySelector('h5').id,
            nombre: objeto.querySelector('h5').textContent,
            precio: parseFloat(objeto.querySelector('.shop-item-price').textContent),
            cantidad: 1

        } 
    
        let yaExiste = false;

        for (const elemento of carrito) {

            if (prod.id == elemento.id) {

                elemento.cantidad +=1;
                yaExiste = true;

            }
            
        }

        if (!yaExiste) {

            carrito = [...carrito, prod];
            
        }

        hacerCarrito();

    } 
    
    function hacerCarrito(){

        let precioTotal = 0;

        $('#totalsCart').html('');
        
        carrito.forEach(el => {

            $('#totalsCart').append(
                `
                <div class="cart-row text-center">
                <span class="cart-item cart-column">${el.nombre}</span>
                <span class="cart-price cart-column">${el.precio}</span>
                <span class="cart-quantity cart-column">${el.cantidad}<button class="btn btn-danger m-3">-</button></span>
                <span class="cart-quantity cart-column">$${el.precio*el.cantidad}</span>
                </div>
                `
            )

            precioTotal += el.precio*el.cantidad;

        })

        modificarPrecioTotal(precioTotal);

        asignarAccionEliminar();

    }
    
    function modificarPrecioTotal(precioTotal){

        document.getElementsByClassName('cart-total-price')[0].innerHTML = precioTotal;

    }

    //Botón para remover el servicio del carrito
    function asignarAccionEliminar(){
        
        const addCarrito = e => {
            if(e.target.classList.contains('btn-primary')) {
                setCarrito(e.target.parentElement.parentElement.parentElement)
            }
            e.stopPropagation()
        }
        
        const setCarrito = objeto => {
                const prod = {
                id: objeto.querySelector('h5').id,
                nombre: objeto.querySelector('h5').textContent,
                precio: objeto.querySelector('p').textContent,
            } 

            carrito.push(prod)
            /* carrito = [...carrito, prod] */
            hacerCarrito() 
        } 
        
        function hacerCarrito(){
            console.log(carrito)
            const totals = document.createElement('div')
            for (const item of carrito) {
                totals.classList.add('cart-items');
                totals.innerHTML += `
                        <div class="cart-row text-center">
                            <span class="cart-item cart-column">${item.nombre}</span>
                            <span class="cart-price cart-column">${item.precio}</span>
                            <span class="cart-quantity cart-column">${item.cantidad}<button class="btn btn-danger m-3">-</button></span>
                            <span class="cart-quantity cart-column">Subtotal</span>
                        </div>
                `;
            }
            document.getElementById("totalsCart").innerHTML = '';
            document.getElementById("totalsCart").appendChild(totals);
        }  

        //Botón para remover el servicio del carrito

        let removeButtons = document.getElementsByClassName('btn-danger');

        for (let i = 0; i < removeButtons.length; i++) {

            let button = removeButtons[i];

            button.addEventListener('click', function(event) {

                let buttonClicked = event.target

                buttonClicked.parentElement.remove();

            })
            
        }

    }

})