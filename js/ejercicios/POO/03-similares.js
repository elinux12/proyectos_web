/*
Crear una funcion en la cual verifique 
que dos objetos son similares, con metodos del mismo
valor.
DE volver true si ambos objetos tienen las mismas propiedades.
*/

function similares(obj1,obj2){
 let distintos = false;
 for (let llave in obj1){
   if(obj1[llave]!=obj2[llave]){
       distintos = true;
   }
   
 } 
    return !distintos;
}

let resultado = similares(
  {id:1, name: 'NIco'}, 
  {id:1, name: 'Lalo'},
  );
console.log(resultado);