const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get("/" , (req,res) => {
    res.send("WELLCOME");
});

app.get("/name" , (req,res) =>{
    res.send("MY Name is Nibru Kefyalew");
});

app.get("/hobby" ,(req,res) =>{
    res.json({hobby: "My favorite hobby is Learnig new things"});
});

app.get("/dream" , (req,res) => {
    res.send("I want to Algorthims Developers")
})


app.listen(port , ()=>{
    console.log("The server is running in http://localhost:${port}");
});