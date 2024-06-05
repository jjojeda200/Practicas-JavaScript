function operacionAsincrona(callback) {
    // Simula una operación asíncrona
    setTimeout(() => {
      // Llama al callback cuando la operación se haya completado
      callback('Resultado de la operación');
    }, 3000);
  }
  
  function miCallback(resultado) {
    console.log(resultado);
  }
  
  operacionAsincrona(miCallback);

  function operacion1(callback) {
    setTimeout(() => {
      console.log('Operación 1 completada');
      callback();
    }, 2000);
  }
  
  function operacion2(callback) {
    setTimeout(() => {
      console.log('Operación 2 completada');
      callback();
    }, 4000);
  }
  
  function operacion3(callback) {
    setTimeout(() => {
      console.log('Operación 3 completada');
      callback();
    }, 6000);
  }
  
  operacion1(() => {
    operacion2(() => {
      operacion3(() => {
        console.log('Todas las operaciones completadas');
      });
    });
  });