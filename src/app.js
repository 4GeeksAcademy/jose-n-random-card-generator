import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let arrPalos = ['♦','♥','♠','♣'];
let arrNumbers = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];


window.addEventListener("load", function(){

    let palo= arrPalos[Math.floor(Math.random()*4)]
    let num2 = arrNumbers[Math.floor(Math.random()*13)]

    if (palo === '♦'){ 
         document.getElementsByClassName("palo-esquinas")[0].innerHTML = "<h2 class='card diamond'>" + palo + "</h2>"
         document.getElementsByClassName("palo-esquinas")[1].innerHTML = "<h2 class='card diamond'>" + palo + "</h2>"
         document.getElementsByClassName("number-center")[0].innerHTML = "<h1 class='diamond'>" + num2 + "</h1>"
    }

    if(palo === '♥'){
        document.getElementsByClassName("palo-esquinas")[0].innerHTML = "<h2 class='card heart'>" + palo + "</h2>"
        document.getElementsByClassName("palo-esquinas")[1].innerHTML = "<h2 class='card heart'>" + palo + "</h2>"
        document.getElementsByClassName("number-center")[0].innerHTML = "<h1 class='heart'>" + num2 + "</h1>"
    }

    if (palo === '♠'){
        document.getElementsByClassName("palo-esquinas")[0].innerHTML = "<h2 class='card spade'>" + palo + "</h2>"
        document.getElementsByClassName("palo-esquinas")[1].innerHTML = "<h2 class='card spade'>" + palo + "</h2>"
        document.getElementsByClassName("number-center")[0].innerHTML = "<h1 class='spade'>" + num2 + "</h1>"


    }

    if (palo === '♣'){
        document.getElementsByClassName("palo-esquinas")[0].innerHTML = "<h2 class='card club'>" + palo + "</h2>"
        document.getElementsByClassName("palo-esquinas")[1].innerHTML = "<h2 class='card club'>" + palo + "</h2>"
        document.getElementsByClassName("number-center")[0].innerHTML = "<h1 class='club'>" + num2 + "</h1>"

    }

    
    
    


    
  
    
})