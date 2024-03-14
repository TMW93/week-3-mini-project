console.log(`Script is working.`);

const possibleInputs = ['R', 'P', 'S'];

console.log(`These are the possible inputs : ${possibleInputs}.`);

//Game stats
let gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
  moveHistory: {
    rock: 0,
    paper: 0,
    scissors: 0
  }
}

// console.table(gameStats);

//Checks user input and updates game stats if input is valid
function inputCheck(user) {
  if(user === possibleInputs[0]) {
    gameStats.moveHistory.rock++;
  } else if(user === possibleInputs[1]) {
    gameStats.moveHistory.paper++;
  } else if(user === possibleInputs[2]) {
    gameStats.moveHistory.scissors++;
  } else {
    alert("Invalid input. Please input R, P or S.");
  }
}

//Gives the AI an input
function aiTurn() {
  let randElement = Math.floor(Math.random() * possibleInputs.length);
  let aiChoice = possibleInputs[randElement];
  return aiChoice;
}

//Compares user and AI input to determine result
function winCheck(user, ai) {
  let result;
  if(user === possibleInputs[0] && ai === possibleInputs[0]) {
    //Rock Tie 
    result = "tie";
    alert(`You chose Rock.\nComputer Chose Rock.\nIt's a Tie!`);
  } else if (user === possibleInputs[1] && ai === possibleInputs[1]) {
    //Paper Tie
    result = "tie";
    alert(`You chose Paper.\nComputer Chose Paper.\nIt's a Tie!`);
  } else if(user === possibleInputs[2] && ai === possibleInputs[2]) {
    //Scissors Tie
    result = "tie";
    alert(`You chose Scissors.\nComputer Chose Scissors.\nIt's a Tie!`);
  } else if(user === possibleInputs[0] && ai === possibleInputs[2]) {
    //User Rock Wins
    result = "win";
    alert(`You chose Rock.\nComputer Chose Paper.\nYou Win!`);
  } else if(user === possibleInputs[2] && ai === possibleInputs[0]) {
    //AI Rock Wins
    result = "loss";
    alert(`You chose Scissors.\nComputer Chose Rock.\nYou Lose!`);
  } else if(user === possibleInputs[1] && ai === possibleInputs[0]) {
    //User Paper Wins
    result = "win";
    alert(`You chose Paper.\nComputer Chose Rock.\nYou Win!`);
  } else if(user === possibleInputs[0] && ai === possibleInputs[1]) {
    //AI Paper Wins
    result = "loss";
    alert(`You chose Rock.\nComputer Chose Paper.\nYou Lose!`);
  } else if(user === possibleInputs[2] && ai === possibleInputs[1]) {
    //User Scissors Win
    result = "win";
    alert(`You chose Scissors.\nComputer Chose Paper.\nYou Win!`);
  } else if(user === possibleInputs[1] && ai === possibleInputs[2]) {
    //AI Scissors Win
    result = "loss";
    alert(`You chose Scissors.\nComputer Chose Rock.\nYou Lose!`);
  }
  return result;
}

//Storing results in game stats
function resultStore(gameResult) {
  if(gameResult === "win") {
    //User wins
    gameStats.wins++;
  } else if(gameResult === "loss") {
    //AI wins
    gameStats.losses++;
  } else if(gameResult === "tie") {
    //Tie Game
    gameStats.ties++;
  }
 }

 //RPS will run until the function returns a false boolean
function gameContinue() {
  let game = true;
  if(game) {
    let userContinue = confirm("Do you want to keep playing?");
    if(!userContinue){
      game = false;
    }
  }
  return game;
}

//Game Runs
function gameStart() {
  let gameRun = true;
  // let turnCounter = 1;
  let results;
  let userInput;
  while(gameRun) {
    //Take Input
    userInput = prompt("Rock Paper Scissors");
    //CHeck and store Input if valid
    inputCheck(userInput);
    //Run AIs turn
    let aiInput = aiTurn();
    //Check Results and display results
    results = winCheck(userInput, aiInput);
    //Store Results
    resultStore(results);
    //Check if user wants to continue
    gameRun = gameContinue();
    if(!gameRun) {
      break;
    }
  }
  alert("Game Over!");
}

// gameStart();

// alert("Here are the game stats:\n", gameStats);

console.log(`End of code. It's working`);