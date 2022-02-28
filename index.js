const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/MyDBscl'

const app = express();

mongoose.connect(url);
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

const userRouter = require('./routers/users.js')
app.use('/users', userRouter)

app.listen(9000, () => {
    console.log('server running....')
})