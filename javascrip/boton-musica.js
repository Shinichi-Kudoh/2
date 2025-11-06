function Play() {
 var profExplanations = document.getElementById("profInstructions");
 if (profExplanations.paused) { 
 profExplanations.play();
 } else { 
 profExplanations.pause(); 
 } 
 }
const mitadVolumen = document.getElementById('profInstructions');
mitadVolumen.volume = 0.5;