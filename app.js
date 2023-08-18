const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Express validator form");
});

const port = 2003;

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
});