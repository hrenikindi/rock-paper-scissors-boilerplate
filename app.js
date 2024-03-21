const userBox = document.querySelector(".user");
const userHandImg = document.querySelector("#user-hand");
const AiHandImg = document.querySelector("#Ai-hand");
const choices = document.querySelectorAll(".logos > img");
const choicesBox = document.querySelector(".logos");
const userScoreNumber = document.querySelector(".user-score");
const AiScoreNumber = document.querySelector(".Ai-score");
const replayBox = document.querySelector(".play-again");
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

function HandChoicesCheck(userHand, AiHand) {
  console.log("User chose:", userHand);
  console.log("AI chose:", AiHand);

  if (
    (userHand === "rock" && AiHand === "scissors") ||
    (userHand === "paper" && AiHand === "rock") ||
    (userHand === "scissors" && AiHand === "paper")
  ) {
    userScore++;
    userScoreNumber.textContent = userScore;
    console.log("User wins this round!");
  } else if (
    (userHand === "rock" && AiHand === "paper") ||
    (userHand === "paper" && AiHand === "scissors") ||
    (userHand === "scissors" && AiHand === "rock")
  ) {
    AiScore++;
    AiScoreNumber.textContent = AiScore;
    console.log("AI wins this round!");
  } else {
    console.log("It's a tie!");
  }

  console.log("User's score:", userScore);
  console.log("Ai's score:", AiScore);

  finalResult(userScore, AiScore);
}

function finalResult(userScore, AiScore) {
  if (userScore === 5) {
    choicesBox.style.visibility = "hidden";
    replayBox.style.visibility = "visible";
    replayBox.querySelector("h3").textContent = "User won the game!";
  } else if (AiScore === 5) {
    choicesBox.style.visibility = "hidden";
    replayBox.style.visibility = "visible";
    replayBox.querySelector("h3").textContent = "AI won the game!";
  }
}

const playAgainBtn = document.querySelector(".play-again-box");
playAgainBtn.onclick = () => {
  window.location.href = "./game.html";
};
