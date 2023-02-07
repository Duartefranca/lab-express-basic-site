const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request,response) => {
    
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/bye", (request,response) => {
    
    response.sendFile(__dirname + "/views/bye.html");
});

app.get("/pool", (request,response) => {
    
    response.sendFile(__dirname + "/views/pool.html");
});

app.get("/photos", (request,response) => {
    
    response.sendFile(__dirname + "/views/photos.html");
});

app.get("/paintings", (request,response) => {
    
    response.sendFile(__dirname + "/views/paintings.html");
});

app.listen(3002, () => console.log("Server is running on port 3002"));