'use strict'

const express = require('express') //importa express

//creem el servidor
const app = express() //crida express

app.listen(3000, () =>{
    console.log('API REST corriendo en http://sipwarriper.com:3000')
})


