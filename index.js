var express = require("express");
var translatte = require("translatte"); // Old school
var cors = require('cors')
var app = express()

app.use(cors());

traslate = '';

app.get("/translate", (req, res, next) => {
    var text = req.query.text;
    var from = req.query.from;

    translatte(text, {to: from}).then(res => {
        this.traslate = res.text;
    }).catch(err => {
        console.error(err);
    });
    res.json( this.traslate);
    });
app.listen(3000, () => {
 console.log("Server running on port 30100");
});