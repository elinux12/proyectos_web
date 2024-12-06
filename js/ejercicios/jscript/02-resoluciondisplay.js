/** 
  Nombre: ancho x alto
   8k      7680 x 4320
   4k      3840 x 2160
   WQHD    2560 X 1440
   FHD     1920 X 1080
   HD      1280 X 720 
**/

/*

function nombreResolucion(ancho,alto){

    let display;
 if (ancho >= 1280 && ancho <1920 && alto >=720){
    display = "hd";
}else {
    display = "otra resolucion";
}

if( ancho >=1920 && ancho < 2560 && alto >=1080){
    display = "FHD";
 } 

if ( ancho >= 2560 && ancho <3840 && alto >= 1440){
    display = "WQHD";
}
     return display;
}
    
let pantalla = nombreResolucion(3000,1440);
console.log(pantalla);
*/

/** se puede realizar con la sentencia if else */

function nombreResolucion(ancho,alto){
  if (ancho >=7680 && alto >= 4320){
      return "8K";
  }else if (ancho >=3840 && alto >= 2160){
      return "4k";
  }else if (ancho >= 2560 && alto >= 1440){
      return "WQHD";
  }else if(ancho >= 1920 && alto >= 1080 ){
      return "FHD";
  }else if(ancho >= 1280 && alto >= 720){
      return "HD";
  }
}

let display = nombreResolucion(3020,2010);
console.log(display);