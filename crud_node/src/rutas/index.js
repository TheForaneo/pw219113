const express = require('express');
const rutas = express.Router();

rutas.get("/", (req,res) => {
	res.send("<marquee behavior=alternate scrollamount=50>Hola mundo en node huashuas</marquee>");
});

module.exports = rutas;
