
/* Ejercicio 1

    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/
let sumNumPrimos=0;

function esPrimo(numero) {

    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}

for (let x=0;x<=100;x++) {
    if (esPrimo(x)){
        // console.log("El número " + x + " es primo");
        sumNumPrimos = sumNumPrimos + x;
        console.log(sumNumPrimos);
    }

}


/* Ejercicio 2

    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo:
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

// si en lugar de cadenas (ej. "1") usas numeros (ej [1,2,3,4])
// puedes eliminar las partes de Number abajo y el map de toString.
let arrayA= ["1", "2", "3", "4","9"];
let arrayB = ["2", "1", "3", "5"];


function sumArrays(arr1, arr2){
    
    let numIter = Math.max(arr1, arr2);
    let resultado= [];

    console.log(numIter)

    for(let i  = 0; i < numIter; i++){

        if(arr1.length <= i && arr2.length <= i){
            resultado.push(arr1[i] + arr2[i])
        }else if(arr1.length <= i && !(arr2.length <= i)){
            resultado.push(arr1[i])
        }else{
            resultado.push(arr2[i])
        }

    }

    return resultado;
}

console.log(sumArrays(arrayA,arrayB))


/* Ejercicio 3

    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

console.log(palindrome("oso"));
console.log(palindrome("reconocer"));
console.log(palindrome("A ti no, bonita"));
console.log(palindrome("Atar a la rata"));


/* Ejercicio 4

    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

function makeString(arrayIn, chrSeparator){
    let x = arrayIn.join(chrSeparator)
    return x;
}
console.log(makeString(['Pedro', 'Gon', 'Luis', 'Fran'], '/'))


/* Ejercicio 5

    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/