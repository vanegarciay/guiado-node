var express = require("express");
var path = require("path");
var app = express();

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets') ));
app.get("/",(req, res) => {
    // res,send("hello world");
    res.sendFile(__dirname+ "/index.html");
});
app.listen(8080);

