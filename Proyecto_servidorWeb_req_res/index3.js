var express = require('express');
var app = express();
var archivo = require('fs')
const ruta = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res) {
    res.sendFile(ruta.join(__dirname + '/html/index.html'));
});

// app.post('/ejemplo', function(req, res) {
//     let nombre = req.body.nombre;
//     res.send('dato recibido' + nombre);
// });

app.post('/respuesta', function(req, res) {
    let t = req.body.temperatura;
    let h = req.body.humedad;
    let CO2 = req.body.humedad;
    archivo.writeFile('datos_t.txt', t, (err)=>{
        if (err){
            console.log("error")
        } else {
            console.log("Tempertura guardada")
        }
    });
    res.send("La temperatura es: " + t + ", La humedad es:" + h + "La concentración de CO es: "+ CO2);
});

app.listen(9000, function() {
    console.log('Servidor corriendo en el puerto 9000');
});












// const services = require("express");
// var  webservices = services();
// webservices.use(services.json());  // Recibe del cliente los datos en formato json
// webservices.use(services.urlencoded());  //Codificamos la URL
// const ruta = require("path") ; // Indica directorios

// //Usar post en lugar de get para mayor seguridad
// webservices.post('/peticion', (req,res)=>{
//     let temperatura =req.body.temperatura;                           //respnde.body.dato a recibir

//     res.sendfile(ruta.join(__dirname+ "/html/index.html"));
//     //res.send('Es un servicio nuevo y la temperatura es '+ temperatura);
// })

// webservices.listen(9090, ()=>{
// console.log("Iniciando servicio")
// })