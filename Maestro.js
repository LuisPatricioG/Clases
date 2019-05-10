
class Maestro {
  constructor(materia, calificaciones, promedio) {
    this.materia = materia;
    this.calificaciones = calificaciones;
    this.promedio = promedio;
  }

  calcularPromedio () {
    console.log(`hola`)
    let sumaTotal = 0;
    for (let i = 0; i < this.calificaciones.lenght; i++) {
      sumaTotal += this.calificaciones[i]
    }
    console.log("hola2")
    this.promedio = 1
    }
  }

module.exports = Maestro;
