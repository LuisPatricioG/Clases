const Maestro  = require('./Maestro')

class maestroDeMusica extends Maestro {
  constructor(materia, calificaciones, promedio, edad) {
    super(materia, calificaciones, promedio)
    this.edad = edad
  }
}

module.exports = maestroDeMusica;