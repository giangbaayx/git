const express = require('express');
const app = express();
var bodyPaser = require('body-parser');
const port = 8080;
app.set('view engine', 'ejs');

app.use(bodyPaser.urlencoded({ extended: false }));

app.get('/home', function(req, resp){
   resp.send("Welcome to Nodejs.");
});

app.post("/register", function (req, resp){
    resp.render("register");
});

app.listen(port, function(){
  console.log("App started success, port" + port);
})