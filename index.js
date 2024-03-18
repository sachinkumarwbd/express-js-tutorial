const express = require('express')
const app = express()


// app.use(function(req, res, next){
//     console.log("hello world 4");
//     next();

// })
app.set("view engine","ejs")
app.use(express.static('./public'))

// app.get('/', function (req, res) {
//   res.send("index")
// })
app.get('/', function (req, res) {
    res.render("index",{age:14})   //render home ejs pages
  })

  app.get("/error",function(req, res, next){
  throw Error("error")
  })

  
  app.get('/contect', function (req, res) {
    res.render("contect")   //render contect ejs pages
  })
// app.get('/profile/:username', function (req, res) {
//     res.send(`hello ${req.params.username}`)
//   })
app.use(function errorHandler (err, req, res, next) {  //error handling
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)