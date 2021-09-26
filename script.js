"use strict";
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '  🌮 correct number';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 16;
document.querySelector('.between').textContent = 'between your eyes  👀'
*/

//secretNumber between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// refactored message display
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//game cycle when check button is clicked
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(!guess, typeof guess);

  // when there is no guess
  if (!guess) {
    // document.querySelector(".message").textContent = "  ⛔ No Number ";
    displayMessage("  ⛔ No Number ");

    // when guess is equal to secretNumber
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "  🌮 correct number";
    displayMessage(" 🌮 Correct Number");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    // document.querySelector(".message").textContent =
    //   guess > secretNumber ? " 🔼 Too high" : " 🔽 Too Low";

    displayMessage(guess > secretNumber ? " 🔼 Too high" : " 🔽 Too Low");
    score--;

    document.querySelector(".score").textContent = score;
  } else if (score > 1) {
    // document.querySelector(".message").textContent = " 😞 you loose the game!";
    displayMessage(" 😞 You Lost the game !");
    document.querySelector(".score").textContent = 0;
  }
});

// reset game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//REFACTORED CODE

/*
else if(guess > secretNumber){
    if (score > 1 ){
        document.querySelector('.message').textContent = ' 🔼 Too High!';
            score --;
            document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.message').textContent = ' 😞 you lost the game!';
        document.querySelector('.score').textContent = 0;
    }
//when guess is too low
}else if(guess < secretNumber){
if (score > 1 ){
    document.querySelector('.message').textContent = ' 🔽 Too low!';
    score --;
    document.querySelector('.score').textContent = score;
}else {
document.querySelector('.message').textContent = ' 😞 you lost the game!';
document.querySelector('.score').textContent = 0;
}}
*/
