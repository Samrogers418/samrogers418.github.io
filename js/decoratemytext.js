"use strict";

window.onload= function(){
    // #1 
    // alert("Hello,world!");
    // document.getElementById("but").onclick=decfont;
    // document.getElementById("but").onclick=biggerFont;
    document.getElementById("but").onclick=fonttimer;
    document.getElementById("ck").onchange=checkbox;

}



//#2
// function decAlert(){
//   alert("Hello, world");
//    }

   //#3
   function decfont(){
    document.getElementById("dectext").style.fontSize="24pt";

      }

    //#4
    function checkbox(){
        alert("Hello, world");
        }

     //#5
    function checkbox(){
        var ckbox= document.getElementById("ck");
            if(ckbox.checked){
            document.getElementById("dectext").style.fontWeight="bold"; 
            document.getElementById("dectext").style.color="green"; 
            document.getElementById("dectext").style.textDecoration="underline"; 
            document.body.style.backgroundImage = "url('http://wallup.net/wp-content/uploads/2016/01/315231-nature-flowers-garden-landscape.jpg')";
                } else{
                    document.getElementById("dectext").style.fontWeight="normal";
                    document.getElementById("dectext").style.color="black"; 
                    document.getElementById("dectext").style.textDecoration="none"; 
                    document.body.style.backgroundImage =none;

                }
                    }
         
    function biggerFont() {

        var fontsize= parseInt(document.getElementById("dectext").style.fontSize);
        if(fontsize){
            fontsize+=2;
            document.getElementById("dectext").style.fontSize= fontsize+"pt"
        }else{
         document.getElementById("dectext").style.fontSize= "14pt" 
        }
     
            }

    function fonttimer() { 
        var timer;
        if (timer == null) { 
            timer = setInterval(biggerFont,500); 
        } else { 
            clearInterval(timer); 
            timer = null; 
        } 
  
                    }
            
         
        
                   




