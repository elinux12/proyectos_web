/**
 * Crear un algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: 'nicolas',
}, {
    id: 2,
    name: 'Felipe',
},{
    id: 3,
    name: 'Chanchito',
}];


function toPairs(arr){
     let pares=[];   
    for (i in arr){
        let elemento= arr[i];
        pares[i]= [elemento.id,elemento];


     }
     return pares;
}

let resultado = toPairs(array);
console.log(resultado);

/**
 * Resultado:
 * [0]= [1,{id:1, name: "Nicolas"}]
 * [1]= [2,{id: 2, name: "Felipe"}]
 * [2]= [3,{id: 3, name: "Chanchito"}]
 * 
 **/