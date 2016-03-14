var express = require("express");
var router = express.Router();
// var mongoose = require("mongoose");
var path = require("path");

var employee = require("../modules/node_module.js");
var answer=0;
// mongoose.connect("mongodb://localhost:27017/kappa_cats");

// var Cat = mongoose.model("Cat", {name:String});

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
    }else if(manipulation=="EE"){
      EEing(xval,yval);
    }else if(manipulation=="x^y"){
      xToTheYth(xval,yval);
    }else if(manipulation=="ln"){
      lnFunction(xval,yval);
    }else if(manipulation=="oneOVer"){
      oneOverFunc(xval);
    }else if(manipulation=="ythRoot"){
      nthRoot(xval,yval);
    }else if(manipulation=="x^.5"){
      sqrting(xval);
    }else if(manipulation=="e^x"){
      eXing(xval);
    }
    console.log("answer after: ",answer);

    var thing=answer;

    res.send({response:thing});

});
function eXing(xval){
  answer=Math.pow(Math.E,xval);
}
function sqrting(xval){
  answer=Math.pow(xval,1/2);
}
function nthRoot(xval,yval){
  answer=Math.pow(xval,(1/yval));
}
function oneOverFunc(xval){
  answer=1/xval;
}
function lnFunction(xval){
  answer=Math.log(xval);
}
function xToTheYth(xval,yval){
  holder=xval;
  for(var i=1; i<(yval);i++){
    xval=xval*holder;
  }
  answer=xval
}

function toFloatNumber(xval,yval){
  xval=parseFloat(xval);
  yval=parseFloat(yval);
}
function EEing(xval,yval){
  answer=xval+"x10^"+yval
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
