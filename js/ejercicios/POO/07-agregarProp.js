/**
 * Hacer una funcion que agregue una propiedad ID a un objeto 
 * y que su valor sea un numero aleatorio entre 0 y 1, usando
 * la funcion Math.random(). La funcion debe retornar el objeto. 
 */

let objeto = {
    name: "Nicolas",
};

function agregarId(obj){
   if (typeof obj === "object"){
    let propiedad = "id";
    obj[propiedad] = Math.random();
   }
}

agregarId(objeto);
console.log(objeto);