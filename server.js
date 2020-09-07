const path = require('path');
const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname,'dist')));

app.listen(port,()=>{
    console.log('Running at Port 4000');
});