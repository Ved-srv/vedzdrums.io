/* BY FOR LOOP */ /*detecting button press*/
 for(var i=0; i<document.querySelectorAll(".drum").length; i++ ){
     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
     
     var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
     });
    }
    document.addEventListener("keydown", function (event){
      makeSound(event.key);
    });

/* Detecting key press*/
    function makeSound(key) { 
        switch (key) {
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                  tom1.play();
                break;
    
            case "a" : 
                var tom2 = new Audio("tom-2.mp3");
                  tom2.play();
                  break;
            case "s" : 
                  var tom3 = new Audio("tom-3.mp3");
                    tom3.play();
                    break;
            case "d" : 
                  var tom4 = new Audio("tom-4.mp3");
                    tom4.play();
                    break;
            case "j" : 
                  var snare = new Audio("snare.mp3");
                    snare.play();
                    break;
            case "k" : 
                  var crash = new Audio("crash.mp3");
                    crash.play();
                    break;
            case "l" : 
                  var kick = new Audio("kick.mp3");
                    kick.play();
                    break;
            default: console.log(key);
    
            }
    }
    

/* BY WHILE LOOP */
// var i=0;
// while(i<document.querySelectorAll(".drum").length){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         this.style.color = "white";
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();});
//         i++;
       
// }