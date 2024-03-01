let squareDivs = getSquareDivs();

const person = [
  {
    id: 0,
    name: "Ariana Grande",
    sequence: [square23, square1, square8, square23, square15, square10],
    image: arianagrande.png,
  },
  {
    id: 1,
    name: "Brad Pitt",
    sequence: [square8, square14, square16, square22, square20, square20],
    image: bradpitt.png,
  },
  {
    id: 2,
    name: "Beyonce",
    sequence: [square8, square4, square1, square7, square6, square11],
    image: beyonce.png,
  },
  {
    id: 3,
    name: "Chris Hemsworth",
    sequence: [square6, square17, square5, square14, square18, square2],
    image: chrishemsworth.png,
  },
  {
    id: 4,
    name: "Dwayne Johnson",
    sequence: [square7, square21, square22, square4, square15, square24],
    image: dwaynejohnson.png,
  },
  {
    id: 5,
    name: "Emma Watson",
    sequence: [square10, square11, square7, square3, square10, square7],
    image: emmawatson.png,
  },
  {
    id: 6,
    name: "Ellen DeGeneres",
    sequence: [square4, square8, square24, square19, square18, square20],
    image: ellendegeneres.png,
  },
  {
    id: 7,
    name: "Johnny Depp",
    sequence: [square17, square6, square9, square24, square14, square6],
    image: johnnydepp.png,
  },
  {
    id: 8,
    name: "Keanu Reeves",
    sequence: [square7, square6, square13, square16, square17, square16],
    image: keanureeves.png,
  },
  {
    id: 9,
    name: "Lady Gaga",
    sequence: [square5, square14, square9, square24, square6, square21],
    image: ladygaga.png,
  },
  {
    id: 10,
    name: "Leonardo DiCaprio",
    sequence: [square14, square5, square3, square16, square24, square11],
    image: "leonardodicaprio.png",
  },
  {
    id: 11,
    name: "Megan Fox",
    sequence: [square9, square24, square10, square24, square14, square15],
    image: "meganfox.png",
  },
  {
    id: 12,
    name: "Oprah Winfrey",
    sequence: [square22, square12, square8, square17, square5, square14],
    image: "oprahwinfrey.png",
  },
  {
    id: 13,
    name: "Rihanna",
    sequence: [square18, square21, square7, square2, square16, square4],
    image: "rihanna.png",
  },
  {
    id: 14,
    name: "Robert Downey Jr.",
    sequence: [square23, square1, square8, square22, square15, square10],
    image: "robertdowneyjr.png",
  },
  {
    id: 15,
    name: "Scarlett Johansson",
    sequence: [square8, square14, square16, square22, square20, square20],
    image: "scarlettjohansson.png",
  },
  {
    id: 16,
    name: "Selena Gomez",
    sequence: [square8, square4, square1, square7, square6, square11],
    image: "selenagomez.png",
  },
  {
    id: 17,
    name: "Taylor Swift",
    sequence: [square6, square17, square5, square14, square18, square2],
    image: "taylorswift.png",
  },
  {
    id: 18,
    name: "Tom Holland",
    sequence: [square7, square21, square22, square4, square15, square24],
    image: "tomholland.png",
  },
  {
    id: 19,
    name: "Zendaya",
    sequence: [square10, square11, square7, square3, square10, square7],
    image: "zendaya.png",
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
    name: "Billie Eilish",
    sequence: [square22, square5, square11, square10, square15, square3],
    image: "Billie.png",
  },
  {
    id: 25,
    name: "Gene Simmons",
    sequence: [square18, square19, square16, square6, square10, square3],
    image: "gene.png",
  },
  {
    id: 26,
    name: "Robert Smith",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "smith.png",
  },
  {
    id: 27,
    name: "Pierce Brosnan",
    sequence: [square10, square19, square6, square16, square15, square3],
    image: "Pierce.png",
  },
  {
    id: 28,
    name: "Mark Zuckerberg",
    sequence: [square18, square10, square2, square4, square11, square3],
    image: "Mark.png",
  },
  {
    id: 29,
    name: "Tina Fey",
    sequence: [square6, square24, square11, square10, square15, square3],
    image: "tina.png",
  },
  {
    id: 30,
    name: "Hulk Hogan",
    sequence: [square11, square12, square15, square16, square10, square3],
    image: "Hulk.png",
  },
  {
    id: 31,
    name: "Gary Lineker",
    sequence: [square7, square10, square2, square11, square21, square4],
    image: "Gary.png",
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
