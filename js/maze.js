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
    
        $('#dummy').css('background-color','#ff8888');

        if($('#maze div.boundary').css('background-color') !== $('#dummy').css('background-color')) {
            $("h2#status").text("You win!:)");
        }

    }


