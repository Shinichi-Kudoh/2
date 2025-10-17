function Play() {
 var profExplanations = document.getElementById("profInstructions");
 if (profExplanations.paused) { 
 profExplanations.play();
 } else { 
 profExplanations.pause(); 
 } 
 }