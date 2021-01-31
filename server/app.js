const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlumniPortal'
const cors = require('cors')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected....")
})

app.use(cors())

app.use(express.json())

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)


app.listen(9000, () => {
    console.log("Listening...")
})