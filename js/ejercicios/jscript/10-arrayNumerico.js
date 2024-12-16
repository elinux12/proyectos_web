/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N
 */

let longitud=7;

function crearArray(n){
    let arr =[];
    let contador=0;
   do {
    arr[contador]= contador+1;
    contador+=1;

} while (arr.length<n);

    return arr;
   

   
    
}

let resultados = crearArray(longitud);
console.log(resultados);

/**
 * 
 *  if (arr.length<=n){
        arr[contador]=contador;
        contador+=1;
   }
   return arr;
 * 
 */