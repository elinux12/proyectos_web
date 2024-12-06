/** 
* Crear una funcion en que sus atributos reciba un array con elementos
*y como segundo atributo un idx el cual representará la posicion del array.
* el idx no debe de ser menor a 0, y validar si existe o no esa posición,
* en caso de existir imprimir el valor de la posicion del array.
*/
function getbyIdx(arr,idx){

   if(arr.length >idx && idx>=0){
      return arr[idx];
   } else {
      return "El indice no exise";
   }
   
}

let resultado = getbyIdx([1,2,3,4],6);
console.log(resultado);
/* devuelve 2, porque es el valor del array arr[1] su valor es 2.*/

