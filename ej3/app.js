/*3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad.
En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los
datos ingresados y un mensaje si es mayor o no de edad (edad >= 18) */

class Alumno {
  nombre = ""; //atributos
  edad = 0; //atributos

  constructor(nombre, edad) {
    this.nombre = nombre; //al atributo le asigno el nombre del constructor
    this.edad = edad;
  }

  getDatoAlumno() {
    console.log(this.nombre, this.edad);
  }

  getEsMayor() {
    if (this.edad >= 18) {
      console.log("es mayor de edad");
    } else {
      console.log("es menor de edad");
    }
  }
}

const alumno = new Alumno("carla", 28);

alumno.getDatoAlumno();
alumno.getEsMayor();
