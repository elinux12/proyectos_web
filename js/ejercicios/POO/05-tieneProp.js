/**
 * Crea una funcion en la cual se valide si un
 * objeto tiene una propiedad en concreto, 
 * NO OLVIDAR validar con true apesar que su valor 
 * sea false.
 */
 
 let objeto = {
   id: 1,
   name: "chanchito",
   login: function(){},
   logout: function(){},
 };
 
 let propiedad = 'name';
 
 function tieneProp(obj,propiedad){
      let confirmacion = false;
    for (let valor in obj){
       if(valor === propiedad){
         confirmacion= true;
       } 
    }
    return confirmacion;
 }
 console.log(tieneProp(objeto,propiedad));
 
 