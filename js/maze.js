"use strict";

$(document).ready(function(){

 $("#maze div.boundary").mouseover(turnred);
 $("div#start").mouseover(restore);
 $("div#end").mouseover(win);


});


function turnred(){
    $("#maze div.boundary").addClass("youlose");
    $("h2#status").text("You lose!");

}

function restore(){
    $("div.boundary").removeClass("youlose");
    $("h2#status").text("Click the S to begin.");

}

function win(){
    
    const colo= $("#maze div.boundary").css("background-color");
    if(colo!=="#ff8888"){
        $("h2#status").text("You win!:)");
    }

   }

  


