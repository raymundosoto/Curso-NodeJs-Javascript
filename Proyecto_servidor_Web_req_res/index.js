const http = require("http");  // Sirve para crear un web server
const host = 'localhost';  //'http://' El servidor e snuestra computadora
const port = 8000;       // 1 a 65536 Puerto de conexion

const respuesta = function(req, res){
res.setHeader("Content-type", 'text/html');  // Tipo de información que se enviará al cliente
res.end("¡Hola!, bienvienido al servicio del backend")
}


const server = http.createServer(respuesta); // Crea el servidor web con la respuesta
server.listen(port, host, ()=>{
    console.log('El servidor esá corriendo en el puerto '+ port)
});