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

const person = [
  {
    id: 0,
    name: "Andy Warhol",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 1,
    name: "Steve Redgrave",
    sequence: [square22, square18, square14, square10, square6, square3],
    image: "Sir.png",
  },
  {
    id: 2,
    name: "Steve Redgrave",
    sequence: [square7, square6, square23, square14, square15, square6],
    image: "Sir.png",
  },
  {
    id: 3,
    name: "Kanye West",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "kayne.png",
  },
  {
    id: 4,
    name: "George Washington",
    sequence: [square6, square2, square14, square10, square15, square3],
    image: "George.png",
  },
  {
    id: 5,
    name: "Marilyn Monroe",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 6,
    name: "Mr Motivator",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 7,
    name: "Carlos Townsend",
    sequence: [square7, square2, square23, square14, square15, square6],
    image: "Richard.png",
  },
  {
    id: 8,
    name: "Michael West",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "kayne.png",
  },
  {
    id: 9,
    name: "Storn Howard",
    sequence: [square6, square2, square14, square10, square15, square3],
    image: "George.png",
  },
  {
    id: 10,
    name: "Cranton Phillips",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 11,
    name: "William Hern ",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 12,
    name: "Freddy Tool",
    sequence: [square7, square2, square23, square14, square15, square6],
    image: "Richard.png",
  },
  {
    id: 13,
    name: "Richard Phillips",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "kayne.png",
  },
  {
    id: 14,
    name: "Graham Townsy",
    sequence: [square6, square2, square14, square10, square15, square3],
    image: "George.png",
  },
  {
    id: 15,
    name: "Spannish Gerog",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 16,
    name: "Clarrence Mitrov",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 17,
    name: "Spoony Dan",
    sequence: [square7, square2, square23, square14, square15, square6],
    image: "Richard.png",
  },
  {
    id: 18,
    name: "Fandangle",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "kayne.png",
  },
  {
    id: 19,
    name: "Howard Carmichael",
    sequence: [square6, square2, square14, square10, square15, square3],
    image: "George.png",
  },
  {
    id: 20,
    name: "Hilton mathews ",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 21,
    name: "Hilton mathews ",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 22,
    name: "Hilton mathews ",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 23,
    name: "Hilton mathews ",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 24,
    name: "Hilton mathews ",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 25,
    name: "Andy Warhol",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 26,
    name: "Marilyn Monroe",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Marilyn.png",
  },
  {
    id: 27,
    name: "Louis Theroux",
    sequence: [square10, square19, square6, square16, square15, square3],
    image: "theroux.png",
  },
  {
    id: 28,
    name: "Simone Biles",
    sequence: [square18, square10, square2, square4, square11, square3],
    image: "biles.png",
  },
  {
    id: 29,
    name: "Greta Thunberg",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "greta.png",
  },
  {
    id: 30,
    name: "Jacinda Ardern",
    sequence: [square11, square12, square15, square16, square10, square3],
    image: "Jacinda.png",
  },
];

// get date and set answer to array item of that date

const d = new Date();
let day = d.getDate();

let todaysName = person[1].name;
let todaysSequence = person[1].sequence;
let todaysImage = person[1].image;

//let todaysName = person[2].name;
//let todaysSequence = person[2].sequence;
//let todaysImage = person[2].image;

let capitalAnswer = todaysName;
let imagePath = 'url("images/' + todaysImage + '")';
let rootImage = document.querySelector(":root");
let tileArray = todaysSequence;

// Get image and set to be first item in the array

rootImage.style.setProperty("--bg-image", imagePath);

let count = 0;
let lives = 5;

let answer = capitalAnswer.toLocaleLowerCase();
let toggle = true;
let submitToggle = true;
let current = "";

// put answer in models
document.getElementById("failAnswer").innerHTML = capitalAnswer;
document.getElementById("answer").innerHTML = capitalAnswer;

// move to next object in the array

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
const submitButton = document.getElementById("button");
submitButton.addEventListener("click", submit);

// set tile array to first iteam of database

//Start button: get ID
const start = document.getElementById("start");
start.addEventListener("click", firstTileReveal);

//How to button, modal and close button
const instructionsButton = document.getElementById("how-to");
instructionsButton.addEventListener("click", instructions);
const instructionsModal = document.getElementById("instructions-modal");

const gotIt = document.getElementById("got-it");
gotIt.addEventListener("click", closeInstructions);

//Start button: function.
function firstTileReveal() {
  //remove start button, how-to button and toggle
  start.style.visibility = "hidden";
  submitButton.style.opacity = "1";
  submitButton.className = "submit-final";
  if (toggle === false) {
  } else {
    // set current to first tile in array, hide this tile then remove it from the array
    current = tileArray[0];
    current.style.visibility = "hidden";
    tileArray.shift();
    submitButton.style.display = "block";
    toggle = false;
  }
}

// how-to instructions -open
function instructions() {
  console.log("opening....");
  instructionsModal.style.display = "block";
}

// how-to instructions - Got-it button
function closeInstructions() {
  console.log("closing....");
  instructionsModal.style.visibility = "hidden";
  instructionsButton.style.display = "block";
  // firstTileReveal()
}

// Submit/Skip
function submit() {
  toggle = true;
  //make answer lower case and remove last letter if it is a space
  let guess = document.querySelector("input").value.toLowerCase();
  let last = guess.charAt(guess.length - 1);
  if (last === " ") {
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
      current.style.visibility = "hidden";
      count++;
      toggle = false;
      lives--;
    }
  }

  // fill the score blocks
  if (lives === 4) {
    one.style.background = "whitesmoke";
  }
  if (lives === 3) {
    two.style.background = "whitesmoke";
  }
  if (lives === 2) {
    three.style.background = "whitesmoke";
  }
  if (lives === 1) {
    four.style.background = "whitesmoke";
  }
  if (lives < 1) {
    five.style.background = "whitesmoke";
    modalFail.style.display = "block";
  }
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

// let darkModeToggle = 0;

let body = document.querySelector("body");
let square = document.querySelectorAll(".square");
let box = document.querySelector(".grid-box");
let score = document.querySelectorAll(".score");
let text = document.querySelector("h1");
// sun.style.visibility = 'hidden';
const darkModeButton = document.getElementById("dark");
darkModeButton.addEventListener("click", darkMode);

function darkMode() {
  if (darkModeToggle === 0) {
    console.log("turning on Dark mode");
    body.style.background = "#121212";
    darkModeToggle = false;
    text.style.color = "#666666";
    rootImage.style.setProperty("--color-main", "#1f1b24");
    rootImage.style.setProperty("--modal-content-color", "#666666");
    rootImage.style.setProperty("--joe-border-color", "#F2CA7F");
    darkModeButton.style.color = "#666666";
    start.style.color = "black"
    darkModeToggle = 1;
    for (i = 0; i < score.length; ++i) {
      score[i].style.background = "#666666";
    }
    submitButton.style.color = "black"
  } else if (darkModeToggle === 1) {
    console.log("turning off Dark mode");
    body.style.background = "#f2cb80";
    body.style.backgroundSize = "32.01px 27.83px";
    text.style.color = "whitesmoke";
    rootImage.style.setProperty("--color-main", "#f2cb80");
    rootImage.style.setProperty("--modal-content-color", "whitesmoke");
    rootImage.style.setProperty("--joe-border-color", "whitesmoke");
    darkModeButton.style.color = "#666666";
    darkModeToggle = 0;
    start.style.color = "whitesmoke"
    for (i = 0; i < score.length; ++i) {
      score[i].style.background = "var(--joe-background-color)";
    }
    start.style.color = "whitesmoke"
  }
}
