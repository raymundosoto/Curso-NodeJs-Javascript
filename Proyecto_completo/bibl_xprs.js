
// Webservice   express
const express = require('express');

const app = express();
const port = 8000; //65526   = 65535



app.get('/', (req, res) => {
    res.send("Hola estee es un servicio den la nube local");
});

app.listen(port, ()=>{
    console.log('El servicio esta listo en '+ port);
});




/* const express = require('express');
const app = express();
const port = 8000; //65526 es 2 a la 16 bits = 65535

app.get('/', (req, res) => {
    res.send("Hola este es un servicio en la nube local");
});

app.listen(port, () => {
    console.log('El servidor web ya esta listo por el puerto' + port);
});
 */