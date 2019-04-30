const express = require('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');

//rutas.get("/", (req,res) => {
//	res.send("<marquee behavior=alternate scrollamount=50>Hola mundo en node huashuas</marquee>");
//});

rutas.get('/', customerController.list);
//rutas.post('/add', customerController.save);
//rutas.get('/delete', customerController.delete);
//rutas.get('/update/:id', customerController.edit);
//rutas.post('/update/:id', customerController.update);

module.exports = rutas;
