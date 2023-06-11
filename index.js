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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('homepage.html');
});

app.get('/register', (req, res) => {
  res.render('register.html');
});

app.get('/CreateTable_DoggySitters',CreateDB.CreateTable_DoggySitters);
app.post('/Create_DoggySitter',CRUD.createNewDoggySitter);
app.listen(port,()=>{
    console.log("Server is running on port"+port)
    });

