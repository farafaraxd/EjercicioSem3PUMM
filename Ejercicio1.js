/* 
El abuelo dejo una herencia a sus tres nietos.
Juan recibio 5000 pesos, Julia recibio 4000 pesos y Jair 3000
*/

var Juan = 5000;
var Julia = 4000;
var Jair = 3000;

//Llego la abuela y le dijo a su nieto favorito Jair,
//que le doblaba el dinero que ya tenia;

//EJEMPLO
Jair *= 2;

//Juan se compro un monton de dulces y gasto 1500 pesos
Juan -=1500

// A julia le dijeron que le iban a dar lo doble 
//de lo que tenia Juan en ese instante
Julia +=Juan *2

//Juan tuvo suerte y vendio sus dulces que ya no
//comio, ganando 2000
Juan +=2000


//Jair decidio donar la mitad de su herencia.
Jair /=2

//Julia vio el acto tan bonito de Jair, y le dio 5000 de su dinero
Jair +=5000
Julia-=5000


/*Aqui es el espacio en el que verificas si escribiste
bien cada parte */

function loCalculeBien(arreglo){
    if (arreglo[0]==5500){
      if (arreglo[1]==6000)
      {
       if(arreglo[2]==8000)
        {
          return true;
        }
      }
    }
    return false;
}

var miRespuesta = [Juan, Julia, Jair];

if (loCalculeBien(miRespuesta)) {
	console.log("Muy bien! Pasaste la prueba :)");
} else {
	console.log("Hubo un fallo en los calculos :( intenta de nuevo!");
}

console.log("Juan se quedo con ", Juan);
console.log("Julia se quedo con ", Julia);
console.log("Jair se quedo con", Jair);