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

function saludo () {
    alert(`Hola ${nombre}${espacio}${apellido}. Gracias por sumarte!`); 
}
saludo();

/*calculadora*/
let num1 = parseInt(prompt("Ingrese valor"));
let num2 = parseInt(prompt("Ingrese un 2do valor"));
let operacion = prompt("ingrese tipo de operación");
function calculate (num1, num2, operacion) {
    switch(operacion) {
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



//for incremental
// for (let i = 0; i<10; i++) {
//     alert (i);
// }

//for decremental
// for (let index = 10; i >= 0; i--) {
//     alert (i);
// }


/*--------------------------------------------------- CLASE COMPLEMENTARIA 2 ---------------------------------------
/* let rojo = 5;
let azul = 5;
let amarillo = 5;
let stockTotal = rojo+azul+amarillo;
let continuar = true;
​
do{
    let colorDeseado = prompt("Usted se encuentra en la tienda de colores primarios ¿Qué color desea?").toLowerCase();
    if(colorDeseado=="rojo" || colorDeseado=="azul" || colorDeseado=="amarillo"){
        var unidadesDeseadas = prompt("Perfecto, ¿Cuántas unidades desea?");
    }
    
    switch(colorDeseado){
        case "rojo":
            if(unidadesDeseadas <= rojo){
                rojo -= unidadesDeseadas;
                console.log(`Fueron vendidas ${unidadesDeseadas} del color rojo, restan ${rojo}`);
                stockTotal = rojo+azul+amarillo;
                alert(`Usted obtuvo ${unidadesDeseadas} de rojo`);
                break;
            }else{
                alert("No contamos con tantas unidades como desea");
                break;   
            }        
        case "azul":
            if(unidadesDeseadas <= azul){
                azul -= unidadesDeseadas;
                console.log(`Fueron vendidas ${unidadesDeseadas} del color azul, restan ${azul}`);
                stockTotal = rojo+azul+amarillo;
                alert(`Usted obtuvo ${unidadesDeseadas} de azul`);
                break;
            }else{
                alert("No contamos con tantas unidades como desea");
                break;   
            }     
        case "amarillo":
            if(unidadesDeseadas <= amarillo){
                amarillo -= unidadesDeseadas;
                console.log(`Fueron vendidas ${unidadesDeseadas} del color amarillo, restan ${amarillo}`);
                stockTotal = rojo+azul+amarillo;
                alert(`Usted obtuvo ${unidadesDeseadas} de amarillo`);
                break;
            }else{
                alert("No contamos con tantas unidades como desea");
                break;   
            }
        default:
            alert("¿No te enseñaron los colores?");
            break;     
    }
    if(stockTotal > 0){
        let seguirComprando = prompt("¿Desea continuar comprando colores primarios Y/N?").toLowerCase();
        if(seguirComprando == "n"){
            continuar = false;
        }
    }else{
        continuar = false;
    } 
    
}while((continuar == true) && (stockTotal > 0));
​
if(stockTotal == 0){
    alert("Nos hemos quedado sin colores");
}else{
    alert("Gracias por su compra");
}
​ */