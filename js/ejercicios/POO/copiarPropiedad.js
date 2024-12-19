let obj1 = {
    id: 1,
    name: 'hola',
};

function copiar(obj){
  let propiedades = Object.keys(obj);
  let copia={};
  for (let i=0; i<propiedades.length; i++){
     // copia[propiedades[i]] = obj[propiedades[i]];
     copia[propiedades[i]] = 2;
  }
  //copia[propiedades[0]] = 2;
  return copia;
}

let obj2 = copiar(obj1);
console.log(copiar(obj1),obj2);
