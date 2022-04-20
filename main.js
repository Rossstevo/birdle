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

// Database. 
const person = [
    {
        name: "Serena Williams",
        sequence: [square23, square2, square12, square17, square6, square3],
        image: "serena-williams.png"
    },
    {
        name: "Tintin",
        sequence: [square1, square2, square3, square4, square5, square6],
        image: "Tintin.png"
    },
    {
        name: "Michael Jordan",
        sequence: [square19, square2, square14, square6, square15, square3],
        image: "MJ.png"
    }
];


let todaysName = person[0].name;
let todaysSequence = person[0].sequence;
let todaysImage = person[0].image;


// Get image and set to be first item in the array   
const imagePath = 'url("images/' + todaysImage + '")'
let rootImage = document.querySelector(':root');
rootImage.style.setProperty('--bg-image', imagePath)

let count = 0
let lives = 5;
let capitalAnswer = todaysName
let answer = capitalAnswer.toLocaleLowerCase()
let toggle = true;
let submitToggle = true;
let current = '';

// put answer in models
document.getElementById("failAnswer").innerHTML = capitalAnswer;
document.getElementById("answer").innerHTML = capitalAnswer;

// get modals
const modalWin = document.getElementById("myModalWin");
const modalFail = document.getElementById("myModalFail");

// Share divs 
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

// Score cubes
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

// submit button
const button = document.getElementById("button");
button.addEventListener("click", submit)

// set tile array to first iteam of database 
let tileArray = todaysSequence

//Start button: get ID 
const start = document.getElementById("start");
start.addEventListener("click", firstTileReveal);

//How to button, modal and close button 
const how = document.getElementById("how-to");
how.addEventListener("click", instructions);
const intro = document.getElementById("intro-modal")
const gotIt = document.getElementById("got-it");
gotIt.addEventListener("click", closeInstructions);

//Start button: function. 
function firstTileReveal() {
    //remove start button, how-to button and toggle
    start.style.visibility = 'hidden';
    how.style.visibility = 'hidden';
    dark.style.visibility = 'hidden';
    button.style.opacity = '1';

    if (toggle === false) {
    } else {
        // set current to first tile in array, hide this tile then remove it from the array
        current = tileArray[0];
        current.style.visibility = 'hidden';
        tileArray.shift();
        button.style.display = "block";
        toggle = false;
    }
}

// how-to instructions -open
function instructions() {
    start.style.visibility = "hidden";
    how.style.visibility = "hidden";
    intro.style.display = "block";
    darkModeButton.style.visibility = "hidden";
}

// how-to instructions - Got-it button
function closeInstructions() {
    intro.style.visibility = 'hidden';
    start.style.display = 'block';
    how.style.display = 'block';
    firstTileReveal()
}

// Submit/Skip
function submit() {
    toggle = true;
    //make answer lower case and remove last letter if it is a space 
    let guess = document.querySelector('input').value.toLowerCase();
    let last = guess.charAt(guess.length-1);
    if (last === " "){
        guess = guess.substring(0, guess.length - 1);
        
    }
   

    // If WIN: display modal and set whatsapp text to the correct text 
    if (answer === guess) {
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
            tileArray.shift();
            current.style.visibility = 'hidden';
            count++;
            toggle = false;
            lives--;
        }
    }

    // fill the score blocks
    if (lives === 4) { one.style.background = "red"; }
    if (lives === 3) { two.style.background = "red"; }
    if (lives === 2) { three.style.background = "red"; }
    if (lives === 1) { four.style.background = "red"; }
    if (lives < 1) { five.style.background = "red"; modalFail.style.display = "block"; }
} /*-end of submit function*/

// Close modal
const close = document.getElementById("cross");
close.addEventListener("click", closeModal);
const closeFail = document.getElementById("crossFail");
closeFail.addEventListener("click", closeModalFail);

function closeModal() {
    modalWin.style.display = "none";
}

function closeModalFail() {
    modalFail.style.display = "none";
}


//countdown time
const countDownDate = new Date("April 2, 2022 23:59:59").getTime(); /*-----------------------------------------set timer*/

// Update the count down every 1 second
const x = setInterval(function () {
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

// darkmode 


let darkModeToggle = 0;

let body = document.querySelector('body');
let square = document.querySelectorAll('.square');
let box = document.querySelector('.box');
let score = document.querySelectorAll('.score');
let text = document.querySelector('h1');
// sun.style.visibility = 'hidden';

const darkModeButton = document.getElementById("dark");
darkModeButton.addEventListener("click", darkMode);



function darkMode() {
    if (darkModeToggle === 0){
        console.log("turning on Dark mode")
        body.style.background = "#222222";
        darkModeToggle = false;
        text.style.color = "#666666";
        rootImage.style.setProperty('--color-main', '#666666');
        rootImage.style.setProperty('--modal-content-color', '#666666');
        darkModeButton.style.background = '#666666';
        how.style.background = '#666666';
        darkModeToggle = 1;
    }else if (darkModeToggle === 1){
        console.log("turning off Dark mode")
        body.style.background = "whitesmoke";
        body.style.backgroundImage = "linear-gradient(139deg, #ffffff 2.38%, #f5f5f5 2.38%, #f5f5f5 50%, #ffffff 50%, #ffffff 52.38%, #f5f5f5 52.38%, #f5f5f5 100%)";
        body.style.backgroundSize = "32.01px 27.83px";
        rootImage.style.setProperty('--color-main', 'whitesmoke');
        rootImage.style.setProperty('--modal-content-color', 'whitesmoke');
        darkModeButton.style.background = '#666666';
        how.style.background = '#87ceeb';
        darkModeToggle = 0;
    }
}