require('dotenv').config()
const express = require('express')  // common js
const app = express()

const port = 3000

// import  Express  from 'express'  // module js

app.get('/',  (req, res)=> {
  res.send('Hello World')
})
app.get('/facebook',  (req, res)=> {
    res.send('Hello facebook')
  })
  app.get('/about',  (req, res)=> {
    res.send('<h1>hello about us</h1>')
  })

app.listen(process.env.port)