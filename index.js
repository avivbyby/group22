const path = require('path');
const express = require('express');
const app = express();
const port = 3000
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
const cookieParser = require('cookie-parser');

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

app.get('/homepage', (req, res) => {
  res.render('homepage.html');
});

app.get('/register', (req, res) => {
  res.render('register.html');
});


const createTablesAndInsertValues = (res) => {
  CreateDB.CreateTable_DoggySitters(null, (err, result) => {
    if (err) {
      console.log("Error creating DoggySitters table: ", err);
    } else {
      console.log("DoggySitters table created successfully");
      CreateDB.Insert_DoggySitters(null, (err, result) => {
        if (err) {
          console.log("Error inserting data into DoggySitters table: ", err);
        } else {
          console.log("Data inserted into DoggySitters table successfully");
          CreateDB.CreateTable_Dogs(null, (err, result) => {
            if (err) {
              console.log("Error creating Dogs table: ", err);
            } else {
              console.log("Dogs table created successfully");
              CreateDB.Insert_Dogs(null, (err, result) => {
                if (err) {
                  console.log("Error inserting data into Dogs table: ", err);
                } else {
                  console.log("Data inserted into Dogs table successfully");
                  CreateDB.CreateTable_DogOwners(null, (err, result) => {
                    if (err) {
                      console.log("Error creating DogOwners table: ", err);
                    } else {
                      console.log("DogOwners table created successfully");
                      CreateDB.Insert_DogOwners(null, (err, result) => {
                        if (err) {
                          console.log("Error inserting data into DogOwners table: ", err);
                        } else {
                          console.log("Data inserted into DogOwners table successfully");
                          CreateDB.CreateTable_SittingHistory(null, (err, result) => {
                            if (err) {
                              console.log("Error creating SittingHistory table: ", err);
                            } else {
                              console.log("SittingHistory table created successfully");
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

createTablesAndInsertValues();

app.get('/DropAllTables', CreateDB.DropAllTables)

app.get('/homepagedoggysitter', (req, res) => {
  res.render('homepagedoggysitter.html');
});

app.get('/homepage-client', (req, res) => {
  res.render('homepage-client.html');
});

app.get('/profile-client', (req, res) => {
  res.render('profile-client.html');
});

app.get('/profile-doggysitter', (req, res) => {
  res.render('profile-doggysitter.html');
});

app.get('/history-doggysitter', (req, res) => {
  res.render('history-doggysitter.html');
});

app.get('/history-client', (req, res) => {
  res.render('history-client.html');
});

app.get('/search-doggysitter', (req, res) => {
  res.render('search-doggysitter.html');
});

app.get('/availability', (req, res) => {
  res.render('availability.html');
});

app.get('/profile-edit-client', (req, res) => {
  res.render('profile-edit-client.html');
});

app.get('/profile-edit-doggysitter', (req, res) => {
  res.render('profile-edit-doggysitter.html');
});



app.post('/Login', CRUD.login);

app.get('/CreateTable_DoggySitters',CreateDB.CreateTable_DoggySitters);
app.get('/DropTable_DoggySitters', CreateDB.DropTable_DoggySitters)
app.get('/insertTable_doggysitter', CreateDB.Insert_DoggySitters)


app.get('/CreateTable_Dogs',CreateDB.CreateTable_Dogs);
app.get('/DropTable_Dogs', CreateDB.DropTable_Dogs)
app.get('/insertTable_dogs', CreateDB.Insert_Dogs)

app.get('/CreateTable_DogOwners',CreateDB.CreateTable_DogOwners);
app.get('/DropTable_DogOwners', CreateDB.DropTable_DogOwners)
app.get('/insertTable_dogOwner', CreateDB.Insert_DogOwners)

app.get('/CreateTable_SittingHistory',CreateDB.CreateTable_SittingHistory);
app.get('/DropTable_SittingHistory', CreateDB.DropTable_SittingHistory)

app.post('/Create_DogOwner', upload.none(), CRUD.createNewDogOwner)
app.post('/Create_DoggySitter', upload.none(), CRUD.createNewDoggySitter);




app.listen(port,()=>{
    console.log("Server is running on port"+port)
  });
