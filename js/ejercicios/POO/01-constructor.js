/**
Usar el metodo MARTH.RANDOM para generar un numero random 
 * asignarle ese random a una propiedad id en Usuario

*/

function Usuario(name){
    this.name= name;
    this.id= Math.random();
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user,user2);


/**
Usuario {name: 'Felipe', id: num random}
*/
