const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('register');
});

const port = 2003;

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
});