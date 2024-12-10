/**
 * Crear algoritmo que devuelva numero
 * menor y mayor de un array
 */
let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(array){
    let num_mayor =0; 
    let num_menor =0;
    
    for (i in array){
        if (num_mayor <= array[i] ){
            num_mayor =array[i];
        } else {
            num_menor = array[i];
        }
     }
     return "Es el menor: " + num_menor + " Es el mayor: " + num_mayor;


}

let numeros = getMenorMayor(array);
console.log(numeros);

