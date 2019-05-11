const  Maestro = require('./Maestro')

class MaestroDeFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad){
      super(materia, calificaciones);
      this.antiguedad = antiguedad;
  }
}

module.exports = MaestroDeFisica;
