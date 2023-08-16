//1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.

function numImpares() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

numImpares();
