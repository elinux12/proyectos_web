/**
 * Una factory FUnction utiliza un return 
 * para devolver sus valores
*/
function createUsuario(name){
  return{  
    name: name,// Se puede utilizar name; ya que hace refencia a si misma.
    id: Math.random(),
  };
}

let user = createUsuario("Felipe");
let user2 = createUsuario("Chanchito Feliz");
console.log(user,user2);
