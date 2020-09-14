'use strict'
//nodemon --> libreria de desarrollo para que los cambios que se hagan en entorne de desarrollo se vean aplicados sin tener q reiniciar el servidor cada vez


const express = require('express') //importa express

const bodyParser = require('body-parser'); //body-parser es un framework per parsejar info de crides http... l'usarem com a middlewhere de epxress

//creem el servidor
const app = express(); //crida express
const port = process.env.PORT || 3000; //escoltem port donat per env o usem 3000 per defecte


app.use(bodyParser.urlencoded({ extended: false})) //afegim middlewhere
app.use(bodyParser.json()) //afegim middlewhere

app.get('/',(req, rest)=>{
    res.send({message: 'Hola mundo!'})
})


app.listen(port, () =>{
    console.log(`API REST corriendo en http://nodejs.sipwarriper.com:${port}`)
})


