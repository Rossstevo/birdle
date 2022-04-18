//---------------get squares -----//
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const square10 = document.getElementById("square10");
const square11 = document.getElementById("square11");
const square12 = document.getElementById("square12");
const square13 = document.getElementById("square13");
const square14 = document.getElementById("square14");
const square15 = document.getElementById("square15");
const square16 = document.getElementById("square16");
const square17 = document.getElementById("square17");
const square18 = document.getElementById("square18");
const square19 = document.getElementById("square19");
const square20 = document.getElementById("square20");
const square21 = document.getElementById("square21");
const square22 = document.getElementById("square22");
const square23 = document.getElementById("square23");
const square24 = document.getElementById("square24");


// variables 
const play = document.getElementById("myAudio"); 



let count = 0
let lives = 5;
let capitalAnswer = "Stormzy" /*----------------------------------------------change this line daily*/
let answer = capitalAnswer.toLocaleLowerCase() 
let toggle = true;
let submitToggle = true;
let current = '';

// const clueBox = document.getElementById("clueBox");

// const clue = document.getElementById("clue");
// clue.addEventListener("click", cluereveal);

// function cluereveal() {
//     console.log("clue")
//     clueBox.style.visibility = 'none';
// }




// put answer in models ---------------
document.getElementById("failAnswer").innerHTML = capitalAnswer;
document.getElementById("answer").innerHTML = capitalAnswer;



const modalWin = document.getElementById("myModalWin");
const modalFail = document.getElementById("myModalFail");


const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");


// -------------------score cubes---------//
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const button = document.getElementById("button");
button.addEventListener("click", submit)

//order in which tiles will be revealed 
let tileArray = [square14, square21, square15, square6, square3, square3]   /*-----------------------------------change this line daily*/

// bug finding 
console.log(tileArray)
console.log("Count at start = " + count)
console.log("Lives at start = " + lives)


// const skip = document.getElementById("skip-button");
// skip.addEventListener("click", submit);




//Start button: get ID 
const start = document.getElementById("start");
start.addEventListener("click", firstTileReveal);
const how = document.getElementById("how-to");
how.addEventListener("click", instructions);
const intro = document.getElementById("intro-modal")
const gotIt = document.getElementById("got-it");
gotIt.addEventListener("click", closeInstructions);


start.style.display = "block";

//Start button: function. 

function firstTileReveal() {
    //remove start button
    start.style.visibility = 'hidden';
    button.style.opacity = '1';
    how.style.visibility = 'hidden';

    



    if (toggle === false) {
    } else {
    // set current to first tile in array, hide this tile then remove it from the array
        current = tileArray[0];
        console.log("tile array length: "+ tileArray.length);
        current.style.visibility = 'hidden';
        tileArray.shift();
        toggle = false;
        console.log("START")
        console.log(tileArray)
        console.log("Count after start button = " + count)
        console.log("Lives after start button = " + lives)
        // skip.style.display = "block";
        button.style.display = "block";
    }

}


function instructions() {
    start.style.visibility = "hidden";
    how.style.visibility = "hidden";
    intro.style.display = "block";


}


function closeInstructions() {
    intro.style.visibility = 'hidden';
    start.style.display = 'block';
    how.style.display = 'block';
    firstTileReveal()

}






// -------------button answer checker ----


function submit() {



    console.log(tileArray)
    toggle = true;

//make answer lower case and remove last letter if it is a space 
    let guess = document.querySelector('input').value.toLowerCase();
    let last = guess.charAt(guess.length-1);
    if (last === " "){
        guess = guess.substring(0, guess.length - 1);
        
    }


// If WIN display modal and set whatsapp text to the correct text 
    if (answer === guess) {
        console.log("correct")
        modalWin.style.display = "block";

        if (lives === 5) {   
            firstAttempt.style.display = "block";
            first.style.display = "block";
        }
        if (lives === 4) {   
            secondAttempt.style.display = "block";
            second.style.display = "block";
        }
        if (lives === 3) {   
            thirdAttempt.style.display = "block";
            third.style.display = "block";
        }
        if (lives === 2) {   
            fourthAttempt.style.display = "block";
          fourth.style.display = "block";
          
        }
        if (lives === 1) {   
            fifthAttempt.style.display = "block";
            
            fifth.style.display = "block";
        }
        if (lives === 0) {   
            failAttempt.style.display = "block";
        }

// Else, set the current to the first item in the tile array and increase count
    } else {

        if (toggle === false) {
        } else {
            current = tileArray[0];
            console.log("tile array length: "+ tileArray.length);
            tileArray.shift();
            current.style.visibility = 'hidden';
            count++;
            toggle = false;
            console.log("count after submit = " + count);
            console.log("lives after submit = " + lives);
            lives--;
        }

        
    }
   
   
    if (lives === 4) {
        one.style.background = "red";
    }
    if (lives === 3) {
        two.style.background = "red";
        
    }
    if (lives === 2) {
        three.style.background = "red";
        clue.style.visibility = 'block';
    }
    if (lives === 1) {
        four.style.background = "red";
    }
    if (lives < 1) {
        five.style.background = "red";
        modalFail.style.display = "block";
    }
}



// -----------------Close model --------------//

const close = document.getElementById("cross");
close.addEventListener("click", closeModal);

function closeModal() {
    console.log("close")
    modalWin.style.display = "none";
}
const closeFail = document.getElementById("crossFail");
closeFail.addEventListener("click", closeModalFail);

function closeModalFail() {
    modalFail.style.display = "none";

}






//------------countdown timer----------------------
const countDownDate = new Date("April 19, 2022 23:59:59").getTime(); /*-----------------------------------------set timer*/

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timerFail").innerHTML = hours + ":"
  + minutes + ":" + seconds;
  document.getElementById("timerWin").innerHTML = hours + ":"
  + minutes + ":" + seconds;
//   document.getElementById("timerWin").innerHTML = "bananas";

}, 1000);







