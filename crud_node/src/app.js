const express = require('express');
const app = express();

//Importamos las rutas 
const indiceRutas=require("./rutas/index");

//usar las Rutas
app.use("/", indiceRutas);

//Servidor que este escuchando
app.listen(3000, () =>{
	console.log("Servidor escuchando puerto 3000");
} )