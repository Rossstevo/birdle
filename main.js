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


// -------------------dailys---------//

let count = 0
let lives = 5;
let capitalAnswer = "Martin Freeman" /*-----------------------------------change this line daily*/
let answer = capitalAnswer.toLocaleLowerCase() /*-----------------------------------change this line daily*/
let toggle = true;
let submitToggle = true;
let current = '';

// put answer in models ---------------
document.getElementById("failAnswer").innerHTML = capitalAnswer;
document.getElementById("answer").innerHTML = capitalAnswer;





const modalWin = document.getElementById("myModalWin");
const modalFail = document.getElementById("myModalFail");

// -------------------score cubes---------//
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");








// ------------------ Peep reveal ------------------

let peepArray = [square11, square14, square7, square20, square1]   /*-----------------------------------change this line daily*/



const peep = document.getElementById("peep");
peep.addEventListener("click", peepReveal);

function peepReveal() {
    console.log("toggle count = " + toggle)
    if (toggle === false) {
        console.log("attempt to click")
    } else {


        console.log("peeping...");
        current = peepArray[0];

        peepArray.shift()
        console.log(peepArray);



        current.style.visibility = 'hidden'

        count++;
        // document.getElementById("counter").innerHTML = count
        toggle = false;
        console.log("toggle count = " + toggle)
    }

}




// -------------button answer checker ----
const button = document.getElementById("button");
button.addEventListener("click", submit)

function submit() {


    toggle = true;
    //make answer lower case
    let guess = document.querySelector('input').value.toLowerCase();


    if (answer === guess) {
        console.log("correct")
        modalWin.style.display = "block";
    } else {
        lives--;
    }
    // document.getElementById("lives").innerHTML = lives;
    if (lives === 0) {
        modalFail.style.display = "block";

    }
    console.log("toggle count = " + toggle)
    console.log("count = " + count)
    console.log("lives = " + lives)

    if (lives === 4) {
        one.style.background = "red";
    }
    if (lives === 3) {
        two.style.background = "red";
    }
    if (lives === 2) {
        three.style.background = "red";
    }
    if (lives === 1) {
        four.style.background = "red";
    }
    if (lives === 0) {
        five.style.background = "red";
    }



}

// -----------------Modal--------------//


const close = document.getElementById("cross");
close.addEventListener("click", closeModal);

function closeModal() {
    console.log("close")
    modalWin.style.display = "none";

}

const closeFail = document.getElementById("crossFail");
closeFail.addEventListener("click", closeModalFail);

function closeModalFail() {
    console.log("close")
    modalFail.style.display = "none";

}































// const square1 = document.getElementById("square1");
// square1.addEventListener("click", remove);
// function remove() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         square1.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count;
//         toggle = false;
//         console.log(toggle)
//     }
// }
// const square2 = document.getElementById("square2");
// square2.addEventListener("click", remove2);
// function remove2() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         square2.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count;
//         toggle = false;
//         console.log(toggle)
//     }
// }
// const square3 = document.getElementById("square3");
// square3.addEventListener("click", remove3);
// function remove3() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         square3.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count;
//         toggle = false;
//         console.log(toggle)
//     }
// }
// const square4 = document.getElementById("square4");
// square4.addEventListener("click", remove4);
// function remove4() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         square4.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count;
//         toggle = false;
//     }
// }
// const square5 = document.getElementById("square5");
// square5.addEventListener("click", remove5);
// function remove5() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         square5.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count;
//         toggle = false;
//     }
// }

//     const square6 = document.getElementById("square6");
//     square6.addEventListener("click", remove6);
//     function remove6() {
//         if (toggle === false) {
//             console.log("attempt to click")
//         } else {
//             square6.style.visibility = 'hidden'
//             count++;
//             document.getElementById("counter").innerHTML = count;
//             toggle = false;
//         }
//     }





// square1.addEventListener("click", test1);
// square2.addEventListener("click", test2);
// square3.addEventListener("click", test3);
// square4.addEventListener("click", test4);
// square5.addEventListener("click", test5);
// square6.addEventListener("click", test6);
// square7.addEventListener("click", test7);
// square8.addEventListener("click", test8);
// square9.addEventListener("click", test9);
// square10.addEventListener("click", test10);
// square11.addEventListener("click", test11);
// square12.addEventListener("click", test12);
// square13.addEventListener("click", test13);
// square14.addEventListener("click", test14);
// square15.addEventListener("click", test15);
// square16.addEventListener("click", test16);
// square17.addEventListener("click", test17);
// square18.addEventListener("click", test18);
// square19.addEventListener("click", test19);
// square20.addEventListener("click", test20);
// square21.addEventListener("click", test21);
// square22.addEventListener("click", test22);
// square23.addEventListener("click", test23);
// square24.addEventListener("click", test24);




// function test1() {
    //     current = square1;
    //     remove()
    // }
    // function test2() {
    //     current = square2;
    //     remove()
    // }
    // function test3() {
    //     current = square3;
    //     remove()
    // }
    // function test4() {
    //     current = square4;
    //     remove()
    // }
    // function test5() {
    //     current = square5;
    //     remove()
    // }
    // function test6() {
    //     current = square6;
    //     remove()
    // }
    // function test7() {
    //     current = square7;
    //     remove()
    // }
    // function test8() {
    //     current = square8;
    //     remove()
    // }
    // function test9() {
    //     current = square9;
    //     remove()
    // }
    // function test10() {
    //     current = square10;
    //     remove()
    // }
    // function test11() {
    //     current = square11;
    //     remove()
    // }
    // function test12() {
    //     current = square12;
    //     remove()
    // }
    // function test13() {
    //     current = square13;
    //     remove()
    // }
    // function test14() {
    //     current = square14;
    //     remove()
    // }
    // function test15() {
    //     current = square15;
    //     remove()
    // }
    // function test16() {
    //     current = square16;
    //     remove()
    // }
    // function test17() {
    //     current = square17;
    //     remove()
    // }
    // function test18() {
    //     current = square18;
    //     remove()
    // }
    // function test19() {
    //     current = square19;
    //     remove()
    // }
    // function test20() {
    //     current = square20;
    //     remove()
    // }
    // function test21() {
    //     current = square21;
    //     remove()
    // }
    // function test22() {
    //     current = square22;
    //     remove()
    // }
    // function test23() {
    //     current = square23;
    //     remove()
    // }
    // function test24() {
    // current = square24;
    //     remove()
    // }




    //watsap share feature 
// const linkStart = "whatsapp://send?text=I got todays Peeple in "
// const linkEnd = "https://sparkly-mandazi-c28bd8.netlify.app/"
// let linkText = linkStart + count + linkEnd;
// console.log(linkText);
// const link = document.getElementById("link");
// document.getElementById("link").innerHTML = link


// ------------------ Peep reveal ------------------

// 


// // remove tile 
// function remove() {
//     if (toggle === false) {
//         console.log("attempt to click")
//     } else {
//         current.style.visibility = 'hidden'
//         count++;
//         document.getElementById("counter").innerHTML = count
//         toggle = false;
//     }
// }