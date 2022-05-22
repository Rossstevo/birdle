let squareDivs = getSquareDivs();


const person = [
  {
    id: 0,
    name: "Andy Warhol",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "andy.png",
  },
  {
    id: 1,
    name: "Idris Elba",
    sequence: [square22, square18, square14, square10, square6, square3],
    image: "idris.png",
  },
  {
    id: 2,
    name: "Ray Mears",
    sequence: [square7, square6, square23, square14, square15, square6],
    image: "Ray.png",
  },
  {
    id: 3,
    name: "Paula Radcliffe",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "Paula.png",
  },
  {
    id: 4,
    name: "Tony Hawk",
    sequence: [square6, square3, square15, square7, square15, square3],
    image: "tony.png",
  },
  {
    id: 5,
    name: "Bono",
    sequence: [square11, square12, square17, square10, square15, square3],
    image: "bono.png",
  },
  {
    id: 6,
    name: "Keira Knightley",
    sequence: [square12, square16, square10, square15, square7, square3],
    image: "Keira.png",
  },
  {
    id: 7,
    name: "Bob Marley",
    sequence: [square7, square2, square23, square14, square15, square6],
    image: "bob.png",
  },
  {
    id: 8,
    name: "Emmeline Pankhurst",
    sequence: [square2, square3, square14, square6, square15, square3],
    image: "emmeline.png",
  },
  {
    id: 9,
    name: "Nick Cave",
    sequence: [square2, square3, square14, square10, square7, square3],
    image: "Nick.png",
  },
  {
    id: 10,
    name: "Ernest Hemingway",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Ernest.png",
  },
  {
    id: 11,
    name: "Bruce Lee",
    sequence: [square3, square6, square10, square16, square7, square3],
    image: "bruce.png",
  },
  {
    id: 12,
    name: "Aretha Franklin",
    sequence: [square14, square15, square23, square17, square2, square6],
    image: "Aretha.png",
  },
  {
    id: 13,
    name: "Terry Pratchett",
    sequence: [square14, square17, square10, square8, square15, square3],
    image: "Terry.png",
  },
  {
    id: 14,
    name: "Bob Ross",
    sequence: [square17, square2, square14, square10, square15, square3],
    image: "Bo.png",
  },
  {
    id: 15,
    name: "Ryan Reynolds",
    sequence: [square6, square16, square2, square9, square15, square3],
    image: "Ryan.png",
  },
  {
    id: 16,
    name: "Julius Caesar",
    sequence: [square8, square22, square10, square16, square7, square3],
    image: "ceasar.png",
  },
  {
    id: 17,
    name: "Vincent Van Gogh",
    sequence: [square7, square2, square23, square14, square15, square6],
    image: "vincent.png",
  },
  {
    id: 18,
    name: "Pablo Picasso",
    sequence: [square7, square3, square14, square6, square15, square3],
    image: "Picasso.png",
  },
  {
    id: 19,
    name: "Neil Buchanan",
    sequence: [square1, square23, square14, square10, square15, square3],
    image: "Buchanan.png",
  },
  {
    id: 20,
    name: "Michelangelo",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "Michelangelo.png",
  },
  {
    id: 21,
    name: "Justin Trudeau",
    sequence: [square6, square4, square11, square10, square15, square3],
    image: "Justin.png",
  },
  {
    id: 22,
    name: "Jurgen Klopp",
    sequence: [square10, square2, square11, square17, square15, square3],
    image: "Klopp.png",
  },
  {
    id: 23,
    name: "Steve Jobs",
    sequence: [square23, square17, square16, square11, square15, square3],
    image: "jobs.png",
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


let todaysName = person[day].name;
let todaysSequence = person[day].sequence;
let todaysImage = person[day].image;


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
// let square = document.querySelectorAll(".square");
let box = document.querySelector(".grid-box");
let score = document.querySelectorAll(".score");
let text = document.querySelector("h1");
// const darkModeButton = document.getElementById("dark");
// darkModeButton.addEventListener("click", darkMode);
// let darkModeToggle = 0;
// function darkMode() {
//   if (darkModeToggle === 0) {
//     darkModeToggle = false;
//     console.log("Light Mode: On");
//     rootImage.style.setProperty("--background-color", "white");
//     text.style.color = "black";
//     rootImage.style.setProperty("--modal-content-color", "white");
//     rootImage.style.setProperty("--border-color", "black");
//     darkModeButton.style.color = "white";
//     start.style.color = "black"
//     start.style.background = "white"
//     darkModeToggle = 1;
//     for (i = 0; i < score.length; ++i) {
//       score[i].style.background = "white";
//     }
//     submitButton.style.color = "black"
//   } else if (darkModeToggle === 1) {
//     console.log("Light Mode: Off");
//     body.style.background = "slategrey";
//     body.style.backgroundSize = "32.01px 27.83px";
//     text.style.color = "whitesmoke";
//     rootImage.style.setProperty("--background-color", "slategrey");
//     rootImage.style.setProperty("--modal-content-color", "whitesmoke");
//     rootImage.style.setProperty("--border-color", "whitesmoke");
//     darkModeButton.style.color = "#666666";
//     darkModeToggle = 0;
//     start.style.color = "whitesmoke"
//     start.style.background = "var(--joe-secondary-color)"
//     for (i = 0; i < score.length; ++i) {
//       score[i].style.background = "slategrey";
//     }
//     start.style.color = "whitesmoke"
//   }
// }


function getSquareDivs() {
    let divs = [];
    let numSquares = 24;
  
    // Populate divs[0] - divs[23] with square divs
    for (let i = 0; i < numSquares; i++) {
      let currentSquare = document.getElementById(`square${i}`);
      divs[i] = currentSquare;
    }
  
    return divs;
  }
