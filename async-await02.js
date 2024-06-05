/*
async function getDatos1() {
  return new Promise((resolve) => setTimeout(() => resolve("Datos 1"), 4000));
}
*/
async function getDatos1() {
  return new Promise((resolve) => 
    setTimeout(() => {
      console.log("Timer de Datos 1 cumplido");
      resolve("Datos 1");
    }, 4000)
  );
}

/*
async function getDatos2() {
  return new Promise((resolve) => setTimeout(() => resolve("Datos 2"), 2000));
}
*/
async function getDatos2() {
  return new Promise((resolve) => 
    setTimeout(() => {
      console.log("Timer de Datos 2 cumplido");
      resolve("Datos 2");
    }, 2000)
  );
}

async function getData() {
  try {
    const [data1, data2] = await Promise.all([getDatos1(), getDatos2()]);
    console.log(data1, data2); // Output: Datos 1 Datos 2 (después de 4 segundos)
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();