/** 
 Crear una funcion en la que imprima de 0 al 9
  * cuales son los impares.
*/
function impar(num){
  for (let i=0; i<=num; i++){
      if(i%2 > 0){
          console.log(i+" : es impar");
      }
  }
}
 let resultado = impar(10);
 console.log(resultado);