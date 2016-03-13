var express = require("express");
var router = express.Router();
var path = require("path");
var employee = require("../modules/node_module.js");
var answer=0;

router.post("/objectOfInformation", function(req,res){
    var xval=parseFloat(req.body.xval);
    var yval=parseFloat(req.body.yval);
    var manipulation=req.body.operation;
    console.log("initial answer: ", answer);
    console.log("xval:", xval);
    console.log("yval:", yval);

    if (manipulation=="add"){
      adding(xval,yval);
    }else if(manipulation=="minus"){
      subtracting(xval,yval);
    }else if(manipulation=="multiply"){
      multiplying(xval,yval);
    }else if(manipulation=="divide"){
      dividing(xval,yval);
    }
    console.log("answer after: ",answer);

    var thing=answer;

    res.send({response:thing});

});

function toFloatNumber(xval,yval){
  xval=parseFloat(xval);
  yval=parseFloat(yval);
}

function adding(xval,yval){
  answer=xval+yval;
}

function subtracting(xval,yval){
  answer=xval-yval;
}

function multiplying(xval,yval){
  answer=xval*yval;
}

function dividing(xval,yval){
  answer=xval/yval;
}

router.get("/*", function(req,res){
    //console.log(req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
