

function Bind(text, div1, div2){

  return function(){
    document.getElementById(div1).innerHTML = document.getElementById(text).value;
    document.getElementById(div2).innerHTML = document.getElementById(text).value;
  };
}

let relation = Bind("capturar", "mostrar1", "mostrar2");
/*
Cada vez que el usuario suelta una tecla después de escribir en el campo de texto (capturar),
la función relation se ejecuta automáticamente, actualizando los divs mostrar1 y mostrar2 con
el valor actual del campo de texto. Esto permite que el contenido de los divs se actualice en
tiempo real a medida que el usuario escribe en el campo de texto.
*/
// document.getElementById("capturar").addEventListener("keyup", relation)