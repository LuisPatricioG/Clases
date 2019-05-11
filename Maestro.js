class Maestro {
  constructor(materia, calificaciones){
      this.materia = materia;
      this.calificaciones = calificaciones;
  }

  calcularPromedio(){
      let sumaTotal = 0;
      // for(let calificacion in this.calificaciones ){
      //   // console.log(this.calificaciones[calificacion])
      //   sumaTotal += this.calificaciones[calificacion]
      // }
      this.calificaciones.forEach((calificacion) => {
        sumaTotal += calificacion;
      });
      return (sumaTotal/this.calificaciones.length);
  }
}
module.exports = Maestro
