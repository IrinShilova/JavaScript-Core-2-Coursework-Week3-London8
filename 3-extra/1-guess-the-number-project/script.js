let randomNumber = Math.floor(Math.random() * 100 + 1);
let currantTry = 7;
let triesNumber = document.querySelector(".Tries-output");
triesNumber.innerText = "Number of Tries: " + currantTry;
let guessHolder = document.querySelector(".inputs-Values");

let printResult = document.querySelector(".final-output");

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  if (guess === "" || guess <= 0 || guess > 100) {
    printResult.innerText = "Please enter a number between 1 and 100";
    return 0; //just to exit of function;
  }

  if (guess > randomNumber) {
    printResult.innerText = "Number is too high, try again";
    currantTry--;
    triesNumber.innerText = "Number of Tries: " + currantTry;
  } else if (guess < randomNumber) {
    printResult.innerText = "Number is too low, try again";
    currantTry--;
    triesNumber.innerText = "Number of Tries: " + currantTry;
  } else {
    printResult.innerText = `${randomNumber} Guess is correct. You win!`;
  }

  if (currantTry === 0) {
    triesNumber.innerText = `You Lose, the number was ${randomNumber}`;
    printResult.innerText = "";
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  currantTry = 7;
  triesNumber.innerText = "Number of Tries: " + currantTry;

  printResult.innerText = "Guess a number between 1 and 100";
  guessHolder.value = "";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
