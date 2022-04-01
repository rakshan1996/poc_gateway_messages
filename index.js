const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get('/messages',(req,res)=>{
    res.send("From Messaging Service hosted at 4001");
});

app.listen(4001,()=>{
console.log("Listening on 4001");
});