
/*condicional para chequear de que año es la patente*/

let nombre = prompt("Tu nombre");
let apellido= prompt("Y tu apellido?");
let patente = parseInt(prompt("ingresá tu patente"));

let saludo = alert("Hola " + nombre + " " + apellido + ". Gracias por sumarte a nuestra comunidad!")

const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});

/*var spanWidth = $('#text span').width();
$('#text').animate( { width: spanWidth }, 3000 );

let temperatura = parseInt(prompt("Cuantos grados hacen?"));
let clima = prompt("Como está el cielo?");

let saludo = alert("Hola " + nombre + " " + apellido + ". Gracias por sumarte!");

    if (temperatura >= 30&&clima=="soleado") {
        alert("Que calor! andate a la pile!");
    }
    else if (temperatura < 30&&clima=="soleado") {
        alert("Clima ideal");
    }
    else if (temperatura <= 10&&clima=="nublado") {
        alert("Está re feo, quedate mirando pelis");
    }
    else if (temperatura <= 10&&clima=="soleado") {
        alert("Abrigate y salí a pasear!");
    }     
    else {
        alert("Que frio!!!");
    } */