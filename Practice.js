const express = require("express");
const app = express();
const port= 8080;

app.get  ('/',(req,res) => {
    res.send ("This is homepage");
})

app.get ('/register', (req,res) => {
    res.send ("This is registration page")
})
  

  

app.listen (port,()=>{
    console.log("Serve is running on:"+port)
});