const express = require('express')
const app = express()
const path = require('path')

// app.use('/api', require('./api')) // API

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests


module.exports=app;