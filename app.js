const userBox = document.querySelector(".user");
const userHandImg = document.querySelector("#user-hand");
const AiHandImg = document.querySelector("#Ai-hand");
const choices = document.querySelectorAll(".logos > img");
const choicesBox = document.querySelector(".logos");
const userScoreNumber = document.querySelector(".user-score");
const AiScoreNumber = document.querySelector(".Ai-score");
const playAgainBox = document.querySelector(".play-again");
const gameOptions = ["rock", "paper", "scissors"];

let userScore = 0;
let AiScore = 0;

function handleChoice(option) {
  option.addEventListener("click", () => userFunction(option.alt));
}

choices.forEach(handleChoice);

function userFunction(userPick) {
  userHandImg.src = `assets/${userPick}-hand.png`;
  const AiPick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  AiHandChoice(AiPick);
  HandChoicesCheck(userPick, AiPick);
}

function AiHandChoice(hand) {
  AiHandImg.src = `assets/${hand}-hand.png`;
}

function HandChoicesCheck(playerHand, CompHand) {
  console.log("Player chose:", playerHand);
  console.log("Comp chose:", CompHand);

  if (
    (playerHand === "rock" && CompHand === "scissors") ||
    (playerHand === "paper" && CompHand === "rock") ||
    (playerHand === "scissors" && CompHand === "paper")
  ) {
    userScore++;
    userScoreNumber.textContent = userScore;
    console.log("Player wins this round!");
  } else if (
    (playerHand === "rock" && CompHand === "paper") ||
    (playerHand === "paper" && CompHand === "scissors") ||
    (playerHand === "scissors" && CompHand === "rock")
  ) {
    AiScore++;
    AiScoreNumber.textContent = AiScore;
    console.log("Comp wins this round!");
  } else {
    console.log("It's a tie!");
  }

  console.log("Player's score:", userScore);
  console.log("Comp's score:", AiScore);

  finalResult(userScore, AiScore);
}

function finalResult(userScore, AiScore) {
  if (userScore === 5) {
    choicesBox.style.visibility = "hidden";
    playAgainBox.style.visibility = "visible";
    playAgainBox.querySelector("h3").textContent = "You won the game!";
  } else if (AiScore === 5) {
    choicesBox.style.visibility = "hidden";
    playAgainBox.style.visibility = "visible";
    playAgainBox.querySelector("h3").textContent = "Comp won the game!";
  }
}

const playAgainBtn = document.querySelector(".play-again-box");
playAgainBtn.onclick = () => {
  window.location.href = "./game.html";
};
