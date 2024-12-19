/**
  Crear una funcion que devuelva
   * que propiedades son metodos
*/

let objeto = {
  id: 1,
  name: 'chanchito',
  login: function(){},
  logout: function(){}
}

function cualesMetodos(obj){
 for(let llave in obj){
    if(typeof obj[llave]==="function"){
         console.log(llave);
    }
    
  } 
  
}

cualesMetodos(objeto);

