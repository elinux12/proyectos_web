/**
 * Crear una funcion que realice una copia
 * de un objeto que le pasemos.
 * NOTA: NO SE PUEDE UTILIZAR EL OPERADOR DE LOS 3 PUNTOS (...) NI Object.assign
 */
 
 let obj1 = {
   id: 1,
   name: 'chanchito',
 };
 
 function crearCopia(obj){
    let copia ={};
    for (let llave in obj){
        copia[llave] = obj[llave];
    }
    return copia;
}
 
 
 
 let obj2 = crearCopia(obj1);
 console.log(obj2,obj2);

 /**
 let obj2 = crearCopia(obj1);
 console.log({obj1,obj2});
 */