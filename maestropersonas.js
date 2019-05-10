const maestroDeFisica = require('./maestroDeFisica')
const maestroDeMusica = require('./maestroMusica')

const profe1 = new maestroDeFisica ("fisica", [100,90,80], 0)
const promedioprofe1 = profe1.calcularPromedio()


console.log(promedioprofe1)
