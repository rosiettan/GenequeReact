const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");

const View = require('./models/View')

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://rosiettan-admin:Astana7775@cluster0.jptf7.mongodb.net/geneque", { useNewUrlParser: true }, { useUnifiedTopology: true })

// Set the view engine to ejs
app.use(express.static('public')); // для чтения стилей
app.set('view engine', 'ejs');

// Define a route
// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get("/", async (req, res) => {
  let collection = await db.collection("surveys");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/personal', (req, res) => {
  res.render('personal');
});

app.get('/sample', (req, res) => {
  res.render('sample');
});

app.get('/viewing', (req, res) => {
  View.find()
    .then(surveys => res.json(surveys))
    .catch(err => res.json(err))
  // res.render('viewing');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

//create a data schema
const surveySchema = {
  name: String,
  email: String,
  age: Number
}
const Survey = mongoose.model("Survey", surveySchema)

app.post("/personal", function (req, res) {
  let newSurvey = new Survey({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });
  newSurvey.save()
    .then(() => res.redirect('/personal'))
    .catch(err => res.send(err));
  res.redirect('/personal');
});



const loginSchema = {
  email: String,
  password: String
}
const Login = mongoose.model("Login", loginSchema)

app.post("/login", function (req, res) {
  let newLogin = new Login({
    email: req.body.email,
    password: req.body.password,

  });
  newLogin.save()
    .then(() => res.redirect('/login'))
    .catch(err => res.send(err));
  res.redirect('/login');
});



// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:4000`));


