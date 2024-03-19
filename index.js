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
    res.render("index",)   //render home ejs pages
  })

  app.get("/error",function(req, res, next){  // error handling
  throw Error("somthing went wrong")
 
  })

  app.get('/contect', function (req, res) {
    res.render("contect",{name:" sachin"})   //render contect ejs pages
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