const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://rosiettan-admin:Astana7775@cluster0.jptf7.mongodb.net/geneque", { useNewUrlParser: true}, { useUnifiedTopology: true})

//create a data schema
const surveySchema = {
  name: String,
  email: String,
  age: String
}

const Survey = mongoose.model("Survey", surveySchema)

// Set the view engine to ejs
app.use(express.static('public')); // для чтения стилей
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
    res.render('personal');
});

app.post("/", function(req, res){
  let newSurvey = new Survey ({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });
  newSurvey.save();
  res.redirect('/');
})

app.listen(4000, function() {
  console.log("server is running on 4000");
});
