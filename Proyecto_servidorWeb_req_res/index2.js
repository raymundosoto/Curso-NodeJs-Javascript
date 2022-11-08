var express = require("express");
var port = 8000;

var app = express(); // Crea varia con funcionalidades de expreess


// Crear las respuestas a las peticiones
app.get('/', (req,res)=>{
    res.send('<h1>Este es un servicio N1</hi>')
});                           //Post es alterntiva a get, listen, use

app.get('/saludo', (req,res)=>{
    res.send('Es es un servicio N2')
});                           //Post es alterntiva a get, listen, use

app.get('/saludo2', (req, res) => {
    res.send("<html><body bgcolor=red>Hola</body></html>");
});

app.listen(port,()=>{
    console.log("El servidor está escuchando en el puerto " + port)
});