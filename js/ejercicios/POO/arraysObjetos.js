let arr = ["a","b"];
console.log(arr[0]);

// Aqui el idx guarda el indice mas no su valor.
for (let idx in arr){
  console.log(idx);
}
// AQui al usar arr[valor] se imprime el valor del indice
for (let valor in arr){
  console.log(arr[valor]);
}

let objeto = {
  id: 1,
  nombre: "eli",
};

//AQui se imprime el nombre de la propiedad del objeto, en este caso imprime id y nombre mas no su valor.
for (let indice in objeto){
    console.log(indice);
}

//AQui se imprime el valor del indice, en este caso imprime 1,eli
for (let valor_ob in objeto){
  console.log(objeto[valor_ob]);
}