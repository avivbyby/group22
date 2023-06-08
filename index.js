const path = require('path');
const express = require('express');
const app = express();
const port = 8080

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
    res.sendFile('homepage.html', { root: './views' });
  });

app.listen(port,()=>{
    console.log("Server is running on port"+port)
    });

