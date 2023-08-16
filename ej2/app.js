/*2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector.
Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector. */

//vector es array

class Empresa {
  sueldosOperarios = []; //atributo - variables que creas antes del constructor
  constructor(sueldo1, sueldo2, sueldo3, sueldo4, sueldo5) {
    this.sueldosOperarios.push(sueldo1, sueldo2, sueldo3, sueldo4, sueldo5);
  }

  getSueldosOperarios() {
    console.log(this.sueldosOperarios);
  }
}

const empresa = new Empresa(100, 200, 300, 400, 500);

empresa.getSueldosOperarios();
