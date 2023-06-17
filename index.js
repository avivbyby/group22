const path = require('path');
const express = require('express');
const app = express();
const port = 8080
const sql = require('./DB/db');
const CreateDB = require('./DB/create_db');
const CRUD = require('./DB/CRUD');
const fs = require('fs');
const stringify = require('csv-stringify').stringify;
const { parse } = require("csv-parse");
const CSVToJSON = require('csvtojson');
const bodyParser = require("body-parser");
const multer = require('multer'); 
const upload = multer(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render('homepage.html');
});

app.get('/register', (req, res) => {
  res.render('register.html');
});

app.get('/CreateTable_DoggySitters',CreateDB.CreateTable_DoggySitters);
app.post('/Create_DoggySitter', upload.none(), CRUD.createNewDoggySitter);

app.get('/CreateTable_Dogs',CreateDB.CreateTable_Dogs);
app.post('/Create_Dog', upload.none(), CRUD.createNewDog);

app.get('/CreateTable_DogOwners',CreateDB.CreateTable_DogOwners);
app.post('/Create_DogOwner', upload.none(), CRUD.createNewDogOwner)

app.get('/CreateTable_SittingHistory',CreateDB.CreateTable_SittingHistory);



app.listen(port,()=>{
    console.log("Server is running on port"+port)
  });