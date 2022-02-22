$(() => {

    swal("Hola! los valores y tiempo que vas a ver son estimativos. Cualquier parecido con la realidad es pura coincidencia.");

    $('h1').css({
        'font-size': '4em',
        'color': '#FFD523'
    })

    //Agrandar on hover el h1
    /* $('.marcas').hover(bigger, original); */

    function bigger() {
        $(this).css({
            height: '+=10%',
            width: '+=10%'
        });
    }

    function original() {
        $(this).css({
            height: "",
            width: ""
        });
    }

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
    let button2 = document.getElementById("btnLogout");
    let remember = document.getElementById('remember');
    let espacio = " ";
    
    button.addEventListener("click", clicked);
    button2.addEventListener("click", bye);

    function clicked() {

        console.log(`Hola${document.getElementById('nombre').value}, gracias por sumarte. Tu ${document.getElementById('marca').value}${espacio}${document.getElementById('modelo').value} ya tiene su usuario creado.`);
    
    }

    function bye() {

        console.log(`Te deslogueaste`);

    }

    $(".mostrar").on("click", () => {

        $('.oculto').show();

    })

    btnLogin.addEventListener("click", () => {

        if (remember.checked) {

            saveUser("localStorage");

        } else {

            saveUser("sessionStorage");

        }

    });

    btnLogout.addEventListener("click", () => {

        localStorage.clear();

    })

    //NIGHT AND DAY
    const switchButton = document.getElementById('switch');

    switchButton.addEventListener('click', () => {

        document.body.classList.toggle('dark');

        switchButton.classList.toggle('active');
        //Guardar Night or day en LS
        if(document.body.classList.contains('dark')){

            localStorage.setItem('dark-mode', 'true');

        } else {

            localStorage.setItem('dark-mode', 'false');

        }

    });
    // Modo seleccionado capturado de LS
    if(localStorage.getItem('dark-mode') === 'true'){

        document.body.classList.add('dark');

        switchButton.classList.add('active');

    } else {

        document.body.classList.remove('dark');

        switchButton.classList.remove('active');
    }

    // PATENTE VIEJA O NUEVA?

    //console.log(`${patente} ${patente.length}`);

/*     function añoPatente() {
        if (patente.length == 6) {
            alert("tu patente es previa al 2016");
        } else if (patente.length == 7) {
            alert("tu patente es posterior al 2016");
        }
    }
    añoPatente(); */

    //Creacion de lista de servicios con AJAX y jquery

    const URL_SERVICIOS = "./json/services.json"

    $("#btnLogin").click(() => {
        $.get(URL_SERVICIOS, function (res, state) {
            if (state == "success") {
                let servicios = res;
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
            }
        });
    });

    // Carrito

    let carrito = [];

    const items = document.getElementById('serviceCart')

    items.addEventListener('click', e => {

        addCarrito(e);

    })

    const addCarrito = e => {

        if (e.target.classList.contains('btn-primary')) {

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

            if (prod.id === elemento.id) {

                elemento.cantidad += 1;

                yaExiste = true;

            }

        }

        if (!yaExiste) {

            carrito = [...carrito, prod];

        }

        hacerCarrito();

    }

    function hacerCarrito() {

        let precioTotal = 0;

        $('#totalsCart').html('');

        carrito.forEach(el => {

            $('#totalsCart').append(
                `
                <div class="cart-row text-center">
                <span class="cart-item cart-column">${el.nombre}</span>
                <span class="cart-price cart-column">$${el.precio}</span>
                <span class="cart-quantity cart-column">${el.cantidad}<button class="btn btn-danger m-3">-</button></span>
                <span class="cart-quantity cart-column">$${el.precio * el.cantidad}</span>
                </div>
                `
            )

            precioTotal += el.precio * el.cantidad;

        })

        modificarPrecioTotal(precioTotal);

        asignarAccionEliminar();

    }

    function modificarPrecioTotal(precioTotal) {

        /* const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)
        console.log(nPrecio) */

        document.getElementsByClassName('cart-total-price')[0].innerHTML = precioTotal;
        
    }


    function asignarAccionEliminar() {

        const addCarrito = e => {

            if (e.target.classList.contains('btn-primary')) {

                setCarrito(e.target.parentElement.parentElement.parentElement)
            }

            e.stopPropagation()

            addCarrito();

        } 

        //FUNCION ARMAR LISTA DE SERVICIOS SELECCIONADOS

        function hacerCarrito() {

            const totals = document.createElement('div')
            for (const item of carrito) {
                totals.classList.add('cart-items');
                totals.innerHTML += `
                        <div class="cart-row text-center">
                            <span class="cart-item cart-column">${item.nombre}</span>
                            <span class="cart-price cart-column">$${item.precio}</span>
                            <span class="cart-quantity cart-column">${item.cantidad}<button id="${item.nombre}" class="btn btn-danger m-3 boton-menos">-</button></span>
                            <span class="cart-quantity cart-column">$${item.precio * item.cantidad}</span>
                        </div>
                `;
            }
            
            document.getElementById("totalsCart").innerHTML = '';
            
            document.getElementById("totalsCart").appendChild(totals);

            const botones = document.getElementsByClassName("boton-menos");
            for (const boton of botones) {
                boton.addEventListener("click", (e) => {
                    const servicio = e.target.id;
                    carrito = carrito.filter(item => {
                        if(item.nombre !== servicio){
                            return item;
                        } else if (item.nombre === servicio) {
                            item.cantidad -= 1;
                            if(item.cantidad === 0){
                                return false;
                            } else {
                                return item;
                            }
                        }
                    });
                    hacerCarrito();
                })
            }

            addLocalStorage();

        }

        //Funcion para guardar el carrito en Local Storage
        function addLocalStorage(){

            localStorage.setItem('carrito', JSON.stringify(carrito))

        }

        hacerCarrito();

        //agregarAlCarrito();

        //Botón para remover el servicio del carrito

    let removeButtons = document.getElementsByClassName('btn-danger');

    for (let i = 0; i < removeButtons.length; i++) {

        let button = removeButtons[i];

        button.addEventListener('click', function (event) {

            let buttonClicked = event.target

            buttonClicked.parentElement.parentElement.remove();

        })

    }

    }
    //Boton vaciar carrito

    const btnVaciar = document.getElementById('danger')

    btnVaciar.addEventListener('click', () => {

        carrito = []

        localStorage.clear();
        
    })

    //boton animado de compra finalizada
    function hover() {
        $(".button").on("mouseenter", function () {
            return $(this).addClass("hover");
        });
    }

    function hoverOff() {
        $(".button").on("mouseleave", function () {
            return $(this).removeClass("hover");
        });
    }

    function active() {
        $(".button").on("click", function () {
            return $(this).addClass("active");
        });
    }

    hover();
    hoverOff();
    active();

})