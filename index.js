var express = require("express");
var translatte = require("translatte"); // Old school
var cors = require('cors')
var app = express()

app.use(cors());

app.get("/translate", (req, res, next) => {
    var text = req.query.text;
    var from = req.query.from;
    translatte(text, {to: from}).then(response => {
        console.log(response.text)
        res.json(response.text);
    }).catch(err => {
        console.error(err);
    });
});
    
app.listen(3000, () => {
 console.log("Server running on port 30100");
});