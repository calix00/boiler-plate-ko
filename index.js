const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://calix:dhkim6416!@boilerplate.qewrm.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))