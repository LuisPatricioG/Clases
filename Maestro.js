class Maestro {
  constructor(materia, calificaciones){
      this.materia = materia;
      this.calificaciones = calificaciones;
  }

  calcularPromedio(){
      let sumaTotal = 0;
      this.calificaciones.forEach((calificacion) => {
        sumaTotal += calificacion;
      });
      return (sumaTotal/this.calificaciones.length);
  }
}
module.exports = Maestro
