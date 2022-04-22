const express = require('express');
const app = express();
const http = require("http");
const date = require('date-and-time');

app.get('/getTime', function(pet, resp){
    const now = new Date();
    resp.status(200);
    resp.send(date.format(now,'HH:mm:ss'));
});

app.listen(3000, 'localhost', function(){
    console.log("Express running in port 3000");
});
