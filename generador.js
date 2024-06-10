async function* asyncGenerator() {
    let i = 0;
    while (true) {
      yield i++;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  const gen = asyncGenerator();
  (async () => {
    for await (const value of gen) {
      console.log(value);
      if (value === 4) break; // Detener después de 5 emisiones
    }
  })();