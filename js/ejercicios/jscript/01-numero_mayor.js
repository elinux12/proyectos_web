/*function mayor(a,b){
    if(a<b){
        console.log("b es mayor");
    }else{
         console.log("a es mayor");
    }
}

console.log(mayor(2,1));

*/

//Existe una forma mas facil de hacer la condición y es usando el operador ternario

function mayor(a,b){
      return (a>b) ? a : b;
}

let resultado = mayor(10,35);
console.log(resultado);