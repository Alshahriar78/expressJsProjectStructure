const express = require('express');
const app= new express();
const router= require('./src/Routes/api');




// Application Routes
app.use('/',router);




module.exports=app;