const express = require('express');
const path = require('path'); 
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Importamos las rutas 
const indiceRutas=require("./rutas/index");

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//una vista(view) es un html

//Middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql13'
}, 'single'));

//usar las Rutas
app.use("/", indiceRutas);

//Servidor que este escuchando
app.listen(app.get('port'), () =>{
	console.log("Servidor escuchando puerto 3000");
} )