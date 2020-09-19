'use strict'
//nodemon --> libreria de desarrollo para que los cambios que se hagan en entorne de desarrollo se vean aplicados sin tener q reiniciar el servidor cada vez
const dotenv = require('dotenv').config();
const express = require('express') //importa express
const bodyParser = require('body-parser'); //body-parser es un framework per parsejar info de crides http... l'usarem com a middlewhere de epxress
const mongoose = require('mongoose');

//creem el servidor
const app = express(); //crida express
const port = process.env.PORT || 3000; //escoltem port donat per env o usem 3000 per defecte


app.use(bodyParser.urlencoded({ extended: false})); //afegim middlewhere
app.use(bodyParser.json()); //afegim middlewhere

app.get('/:name',(req, res)=>{
    res.send({message: `Hola ${req.params.name}!`})
});



app.get('/api/product', (req, res) =>{

});

app.get('/api/product/:productId', (req, res) =>{

});

app.post('/api/product', (req,res)=>{

});

app.put('/api/product/:productId', (req, res) =>{

});

app.delete('/api/product/:productId', (req, res) =>{

});




app.get('/',(req, res)=>{
    res.send({message: `Hola, ${req.query.nombre}!`})
});
const options = {
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PWD,
    useNewUrlParser: true
};
const ConnectionString = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}?authSource=admin`;

mongoose.connect(ConnectionString, options, (err,env)=>{
    if (err) {
        console.log(ConnectionString)
        console.log('Error al conectar a la base de datos');
        throw err;
    }
    console.log('Conexión a la base de datos establecida...')

    app.listen(port, () =>{
        console.log(`API REST corriendo en http://nodejs.sipwarriper.com:${port}`)
    });
});

