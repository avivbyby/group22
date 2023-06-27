const path=require("path");
const express= require ("express");
app = express();
port= 8080;


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));



app.get ('/', (req,res)  => {
    res.render('Home.html');
})

app.get ('/grid', (req,res) => {
    res.render('grid.html');
})



app.listen(port,()=>{
    console.log("Server is running on port"+port)
  });
