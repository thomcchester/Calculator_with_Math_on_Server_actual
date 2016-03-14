var express = require("express");
var app = express();
var index = require("./routes/index.js");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", (process.env.PORT || 3000));

app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port ", app.get("port"));
});
