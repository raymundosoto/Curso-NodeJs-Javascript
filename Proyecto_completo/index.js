const fs = require('fs');
var sensor = "la temperatura es de 40 ºC";
// Secuencial
fs.writeFile("archivo.txt", sensor, function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Guardando la información")
    }
});

fs. readFile('archivo.txt', 'utf-8', (err,dato)=> {
    if (err) {
        console.log("error"+ err);
    } else {
        console.log(dato);
    }
});

// Forma asincrona o no blocking  

/* const fs = require('fs');

var sensor = "Buenos dias la tempetarura es de 40 C";

fs.writeFile("archivo.txt", sensor, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("guardando a información...");
    }
});

fs.readFile('archivo.txt', 'utf-8', (err, dato) => {
    if (err) {
        console.log("error" + err);
    } else {
        console.log(dato);
    }
});
 */