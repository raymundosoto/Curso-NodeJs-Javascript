/* require('dotenv').config();

console.log("el puerto es=" + process.env.PORT);
console.log("el token es=" + process.env.TOKEN);
console.log("el password=" + process.env.password);
console.log("la url es =" + process.env.url);
 */

var area = require('./global');   // Se importa archivo con require del archivol global.js
console.log(area.areaC(20))  // Se debe improtar con notacion de puntos variable_asiganda. variable a importar.
console.log(area.arreglo.id)  // Se debe exportar en el directorio de origen  

// var area = require('./global');

// console.log(area.areaC(10));
// console.log(area.PI);
// console.log(area.texto);
