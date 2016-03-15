var signHit="0";
var holdingNumberX="";
var holdingNumberY="";
var whichSign="";
var otherSign="";

$(document).ready(function(){
    //prevent form submission
    $("#projectForm").on("submit", function(event){
    event.preventDefault();
    });
    listening();
});

function listening(){
  $(".clear").on("click",clearing);
  $(".absClear").on("click",absClearing);
  $(".sign").on("click",signHitting);

  if (signHit=="0"){
  $(".btn").on("click",clickButtonX);

  }else{
  $(".btn").on("click",clickButtonY);

}
  $(".equal").on("click", equalHit);


}



function equalHit(){
  if (holdingNumberY===""){
    holdingNumberY="0";
  }
    if((whichSign!="") && (holdingNumberY!="" ) && (holdingNumberX!="")){
      var sendObject={
        "xval":holdingNumberX,
        "yval": holdingNumberY,
        "operation":whichSign
      };
  }
  //now make Ajax Call (francis Call)
  sendFrancis(sendObject);
}
function absClearing(){
  holdingNumberY="";
  holdingNumberX="";
  otherSign="";
}
function clearing(){
  if((holdingNumberY=="")&&(otherSign=="")){
    holdingNumberX="";
  }else if(holdingNumberY==""){
    otherSign="";
  }else{
    holdingNumberY="";
  }
}

function signHitting(){
  signHit=signHit+1;
  if ($(this).hasClass("add")){
    whichSign="add";
    otherSign="+";

  }
  else if ($(this).hasClass("minus")){
    whichSign="minus";
    otherSign="-";
  }
  else if ($(this).hasClass("multiply")){
    whichSign="multiply";
    otherSign="x";
  }
  else if ($(this).hasClass("divide")){
    whichSign="divide";
    otherSign="/";
  }
  else if ($(this).hasClass("EE")){
    whichSign="EE";
    otherSign="EE";
  }
  else if($(this).hasClass("x^y")){
    whichSign="x^y";
    otherSign="x^y";
  }else if($(this).hasClass("ln")){
    whichSign="ln";
    otherSign="ln";
  }else if ($(this).hasClass("oneOver")){
    whichSign="oneOVer";
    otherSign="1/x";
  }else if ($(this).hasClass("ythRoot")){
    whichSign="ythRoot";
    otherSign="x^(1/y)";
  }else if ($(this).hasClass("x^.5")){
    whichSign="x^.5";
    otherSign="x^.5";
  }else if ($(this).hasClass("e^x")){
    whichSign="e^x";
    otherSign="e^x";
  }
  $("numbers").empty();
  $("numbers").append(holdingNumberX+"   "+otherSign);
  console.log("sign",holdingNumberX, holdingNumberY, whichSign);
}

function clickButtonX(){
  if(signHit=="0"){
    if ($(this).hasClass("one")){
    holdingNumberX=holdingNumberX+"1";}
    else if($(this).hasClass("two")){
      holdingNumberX=holdingNumberX+"2";
    }
    else if($(this).hasClass("three")){
      holdingNumberX=holdingNumberX+"3";
    }
    else if($(this).hasClass("four")){
      holdingNumberX=holdingNumberX+"4";
    }
    else if($(this).hasClass("five")){
      holdingNumberX=holdingNumberX+"5";
    }
    else if($(this).hasClass("six")){
      holdingNumberX=holdingNumberX+"6";
    }
    else if($(this).hasClass("seven")){
      holdingNumberX=holdingNumberX+"7";
    }
    else if($(this).hasClass("eight")){
      holdingNumberX=holdingNumberX+"8";
    }
    else if($(this).hasClass("nine")){
      holdingNumberX=holdingNumberX+"9";
    }
    else if($(this).hasClass("zero")){
      holdingNumberX=holdingNumberX+"0";
    }
    else if($(this).hasClass("period")){
      holdingNumberX=holdingNumberX+".";
    }
    $(".numbers").empty();
    $(".numbers").append(holdingNumberX);
    console.log("x",holdingNumberX, holdingNumberY, whichSign);
  }else{
    if ($(this).hasClass("one")){
    holdingNumberY=holdingNumberY+"1";}
    else if($(this).hasClass("two")){
      holdingNumberY=holdingNumberY+"2";
    }
    else if($(this).hasClass("three")){
      holdingNumberY=holdingNumberY+"3";
    }
    else if($(this).hasClass("four")){
      holdingNumberY=holdingNumberY+"4";
    }
    else if($(this).hasClass("five")){
      holdingNumberY=holdingNumberY+"5";
    }
    else if($(this).hasClass("six")){
      holdingNumberY=holdingNumberY+"6";
    }
    else if($(this).hasClass("seven")){
      holdingNumberY=holdingNumberY+"7";
    }
    else if($(this).hasClass("eight")){
      holdingNumberY=holdingNumberY+"8";
    }
    else if($(this).hasClass("nine")){
      holdingNumberY=holdingNumberY+"9";
    }
    else if($(this).hasClass("zero")){
      holdingNumberY=holdingNumberY+"0";
    }
    else if($(this).hasClass("period")){
      holdingNumberY=holdingNumberY+".";
    }
    $(".numbers").empty();
    $(".numbers").append(holdingNumberX+" "+ otherSign+"  "+ holdingNumberY);
    console.log("y",holdingNumberX, holdingNumberY, whichSign);
  }
}

function sendFrancis (sendObject){

  $.ajax({
      type: "POST",
      url: "/objectOfInformation",
      data: sendObject,
      success: function(thing){
          $(".numbers").empty();
          $(".numbers").append(thing.response);
          holdingNumberX=thing.response;
          holdingNumberY="";
          whichSign="";
        }
  });
}
