const  encripta = require('bcrypt');

var cadena = "Raymundo";
var salt = 10;
var hash = encripta.hashSync(cadena, 10)
console.log(cadena +  " encriptada en metodo hash es = " + hash)

// Validar cual coincidee con el cifrado anterior

var hash2 = encripta.hashSync('Raymundo', salt)

console.log(hash2) 

if(hash==hash2){
    console.log("Contraseña coinciden")
}else{
    console.log('Contraseña coinciden')
};
