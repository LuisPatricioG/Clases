const  Maestro = require('./Maestro')

class maestroDeFisica extends Maestro {
  constructor(materia, calificaciones, promedio, antiguedad) {
    super(materia, calificaciones, promedio)
    this.antiguedad = antiguedad
  }
}

module.exports = maestroDeFisica;