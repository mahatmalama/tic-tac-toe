const cvs = document.getElementById("tic-tac-toe");
const ctx = cvs.getContext("2d");
const scoreContainer = document.querySelector(".score");
const gameContainer = document.querySelector(".tic-tac-toe");



let playerOneColor = "blue";
var playerOneColorName = "beautiful blue";
var playerTwoColor = "red";
var playerTwoColorName = "redemption red";


var playerOneName = "Player 1";
var playerTwoName = "Player 2";

const playerOneNameInput = document.querySelector(".names__input-one");
const playerTwoNameInput = document.querySelector(".names__input-two");
const playerOneNameOutput = document.querySelector(".names__output-one");
const playerTwoNameOutput = document.querySelector(".names__output-two");

const submitPlayerOneName = document.querySelector(".names__submit-one");
const submitPlayerTwoName = document.querySelector(".names__submit-two");

const playerTwoNameContainer = document.querySelector(".names__player-two-name-container");

const scoreSpanOne = document.querySelector(".score__player-one-score");
const scoreSpanTwo = document.querySelector(".score__player-two-score");
const scoreTextOne = document.querySelector(".score__player-one");
const scoreTextTwo = document.querySelector(".score__player-two");
var scoreOne = 0;
var scoreTwo = 0;


const whoAgainstWhom = document.querySelector(".score__sub-title");
const vsComputerBtn = document.querySelector(".vs-computer");
const vsPlayerBtn = document.querySelector(".vs-player");
const vsSmartComputerBtn = document.querySelector(".vs-super-computer");

const playerOneBegins= document.querySelector(".player-one-begins");
const playerTwoBegins = document.querySelector(".player-two-begins");

const resetBtn = document.querySelector(".reset-btn");
const totalResetBtn = document.querySelector(".total-reset-btn");

const ROW = 3;
const COL = ROW;
const SQ = squareSize = 80;
const VACANT = "white"; 

var vsComputerBolean = false;
// !!!!!!!! set to false again or 
// hide second player, and change player name
var vsSmartComputerBolean = true;
var computersTurn = false;

// var player = {
//   active: 1,

//   oneName : "Player 1",
//   oneColor: "blue",
//   oneColorName: "beautiful blue",
//   oneScore: 0,

// }


var whoBegins = 1;
var activePlayer = 1;
var win = false;

var fullBoard = false;


var canvasWidth = ROW * SQ;
var canvasHeight = ROW * SQ;

var gameWidth = canvasWidth + 320;

var board = [];
var smartBoard = [];

cvs.setAttribute( "width", canvasWidth.toString() );
cvs.setAttribute( "height", canvasHeight.toString() );
gameContainer.style.width = gameWidth.toString() + "px";


scoreTextOne.style.color = playerOneColor.toString();
scoreTextTwo.style.color = playerTwoColor.toString();

whoAgainstWhom.innerHTML = "Payer VS. Player";




// !!!!!!!!!!!!!!!!!! BOARD [y][x]  ([row][column])  and not [x][y] because of the readability of the board in the terminal !!!!!!!!!!!


function vacantBoard() {
  
  for (r = 0; r < ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
      board [r][c] = VACANT;
    }
  }
}

function vacantSmartBoard() {
  
  for (r = 0; r < ROW; r++){
    smartBoard[r] = [];
    for(c = 0; c < COL; c++){
      smartBoard [r][c] = 0;
    }
  }

}

vacantBoard();

if(vsSmartComputerBolean){
  vacantSmartBoard();
}


function drawBoard() {
  for(r = 0; r<ROW; r++){
    for (c = 0; c < COL; c++){
      drawSquare(c, r, board[r][c] );
    }
  }
}
drawBoard();

function drawSquare(x, y, color) {

  board[y][x] = color;
  
  ctx.fillStyle = color;
  ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
  
  ctx.strokeStyle = "black";
  ctx.strokeRect(x*SQ, y*SQ, SQ, SQ);
}  



function nextPlayersTurn() {

  activePlayer = (activePlayer%2)+1;
  // activePlayer = activePlayer+1;

}



function click(e) {

  var xPosition = e.clientX;
  var yPosition = e.clientY;
  
  clickedCol = Math.floor(xPosition/SQ);
  clickedRow = Math.floor(yPosition/SQ);
  
  if(board[clickedRow][clickedCol] === VACANT){

    playersTurn();
    stupidComputerTurn();
    smartComputerTurn();

  }
}

function playersTurn() {

  // nextPlayersTurn();

  if (activePlayer === 1) {
    drawSquare(clickedCol, clickedRow, playerOneColor);
    whoWins();
    nextPlayersTurn();

  } else {
    drawSquare(clickedCol, clickedRow, playerTwoColor);
    whoWins();
    nextPlayersTurn();
  }
}

function stupidComputerTurn() {
  
  if (vsComputerBolean && !win && !fullBoard && activePlayer === 2) {
        
    var randomCol = Math.floor(Math.random()*3);
    var randomRow = Math.floor(Math.random()*3);
    var counter = 0;

    
    while(board[randomCol][randomRow] !== VACANT && counter < 50){

      counter++;
      
      var randomCol = Math.floor(Math.random()*3);
      var randomRow = Math.floor(Math.random()*3);
      
    }
    setTimeout(function() {
      drawSquare( randomRow, randomCol, playerTwoColor);
      whoWins();
      nextPlayersTurn();
    }, 300);
  }
}


let nextSmartRow = 0;
let nextSmartCol = 0;
function smartComputerTurn(){

  if (vsSmartComputerBolean && !win && !fullBoard  && activePlayer === 2) {

    vacantSmartBoard();
    smartTwoTokens(1000, 10000);
    smartMiddle(100);
    console.log(smartBoard);

    setTimeout(function() {
      drawSquare( nextSmartRow, nextSmartCol , playerTwoColor);
      whoWins();
      nextPlayersTurn();
    },300);
  }

  //   // 1. if two of my own in a row, (if multiple random)
  //   // 2. if two of the opponent in a row, (if multiple - where one of my own is)
  //   smartTwoTokens();
  //   // 3. if middle free, sigle
  //   smartMiddle();
    
  //   // 4. Corners ( chose the one where either only i have one or the opponent has one where i dont)
  //   // 5. where i have one where the opponent doesnt or where the opponent has one where i dont, better both
}




function smartTwoTokens(smartPointsPlayerOne, smartPointsPlayerTwo) {
  //!!!!!! simultation of computer needs to be deleated:
  if(nextSmartCol <2){
    nextSmartRow ++;
  
  } else if (nextSmartCol <2){
    nextSmartCol ++;
  }
  // !!!!!
  twoInARow(playerOneColor, smartPointsPlayerOne);
  twoInARow(playerTwoColor, smartPointsPlayerTwo);
	
  twoInACol(playerOneColor, smartPointsPlayerOne);
	twoInACol(playerTwoColor, smartPointsPlayerTwo);

	twoDiagonal(playerOneColor, smartPointsPlayerOne);
	twoDiagonal(playerTwoColor, smartPointsPlayerTwo);
}
function twoInARow(playerColor, smartPoints) {
  let twoInARowCount = 0;

  for (r = 0; r < ROW; r++){

    twoInARowCount = 0;

    for(c = 0; c < COL; c++){
      if (board [r][c] === playerColor) {
        twoInARowCount++;
        if (twoInARowCount === 2) {
          for(c = 0; c < COL; c++){
            if (board [r][c] === VACANT) {
              smartBoard [r][c] += smartPoints;
              console.log(smartBoard);
            }
          }
        }
      }
    }
  }
}
function twoInACol(playerColor, smartPoints) {
  let twoInAColCount = 0;

  for(c = 0; c < COL; c++){

    twoInAColCount = 0;

    for (r = 0; r < ROW; r++){
      if (board [r][c] === playerColor) {
        twoInAColCount++;
        if (twoInAColCount === 2) {
          for (r = 0; r < ROW; r++){
            if (board [r][c] === VACANT) {
              smartBoard [r][c] += smartPoints;
            }
          }
        }
      }
    }
  }
}
function twoDiagonal(playerColor, smartPoints) {

  if ( board[0][0] === playerColor && board[1][1] === playerColor && board[2][2] === VACANT){
		smartBoard[2][2] += smartPoints;
	}
  if ( board[1][1] === playerColor && board[2][2] === playerColor && board[0][0] === VACANT){
		smartBoard[0][0] += smartPoints;
	}

  if ( board[2][0] === playerColor && board[1][1] === playerColor && board[0][2] === VACANT){
		smartBoard[0][2] += smartPoints;
	}
  if ( board[0][2] === playerColor && board[1][1] === playerColor && board[2][0] === VACANT){
		smartBoard[2][0] += smartPoints;
	}
}


function smartMiddle(smartPoints) {
  if (board[1][1] === VACANT) {
    smartBoard[1][1] += smartPoints;
  };
};




function drawn(){

  if(!win){
    fullBoard = true;
    
    for (r = 0; r < ROW; r++){
      for(c = 0; c < COL; c++){
        if(board [r][c] === VACANT){
          fullBoard = false;
        }
      }
    }

    if(fullBoard){
      setTimeout(function() {
        window.confirm( "Its a draw!" );
        reset();
      }, 300);
    }
  }

}





function whoWins() {

  if (activePlayer === 1) {

    winRow(playerOneColor, activePlayer);
    if (!win) {      
      winCol(playerOneColor, activePlayer);
    }
    if (!win) { 
      winDiagonal(playerOneColor, activePlayer);
    }
    if (!win) { 
      drawn();
    }

    if(win || fullBoard){
      setTimeout(function(){
        reset();
      }, 500);
    }

  } else {

    if (!win) { 
      winRow(playerTwoColor, activePlayer);
    }
    if (!win) {
      winCol(playerTwoColor, activePlayer);
    }
    if (!win) { 
      winDiagonal(playerTwoColor, activePlayer);
    }
    if (!win) {
       drawn();
    }

    if(win || fullBoard){
      setTimeout(function(){
        reset();
      }, 500);
    }
  }
}


function winRow(activePlayerColor, activePlayer) {
  for (r = 0; r < ROW; r++){
    win = true;
    for(c = 0; c < COL; c++){
      if(board[r][c] !== activePlayerColor){
        win = false;
      }
    }

    if (win === true){
      increaseScore(activePlayer);
      setTimeout(function() {
        announceWinner(activePlayer);
      }, 300);

      break;
    }
  }
}

function announceWinner(activePlayer) {
  if (activePlayer === 1 ){
    window.confirm( playerOneName + " - with - " + playerOneColorName + " - WINS " );

  } else{
    window.confirm( playerTwoName + " - with - " + playerTwoColorName + " - WINS " );

  }
  
}

function winDiagonal(activePlayerColor, activePlayer) {

  win = false;

  if(
  board[0][0] === activePlayerColor && board[1][1] === activePlayerColor && board[2][2] === activePlayerColor ||
  board[0][2] === activePlayerColor && board[1][1] === activePlayerColor && board[2][0] === activePlayerColor
  ){
     win = true;
  }

  if (win === true){

    increaseScore(activePlayer);

    setTimeout(function() {
      announceWinner(activePlayer);
    }, 300);
  }
}


function winCol(activePlayerColor, activePlayer) {

  for(c = 0; c < COL; c++){
    win = true;
    for (r = 0; r < ROW; r++){
      if(board[r][c] !== activePlayerColor){
        win = false;
      }
    }

    if (win === true){

      increaseScore(activePlayer);

      setTimeout(function() {
        announceWinner(activePlayer);
      }, 300);
 
      break;
    }
  }
}





function increaseScore(activePlayer) {

  if (activePlayer === 1){
    scoreOne++;
  } else{
    scoreTwo++;
  }

  scoreSpanOne.innerHTML = scoreOne;
  scoreSpanTwo.innerHTML = scoreTwo;
}




function reset() {
  
  vacantBoard();
  drawBoard();

  activePlayer = whoBegins;
  win = false;

  if(vsComputerBolean){
    playerTwoName = "schtupid Computer";
  }

  if(vsSmartComputerBolean){
    vacantSmartBoard();
    playerTwoName = "schmart Computer";
  }

  computerBegins();
}

function totalReset() {
  reset();
  scoreOne = 0;
  scoreTwo = 0;
  scoreSpanOne.innerHTML = scoreOne.toString();
  scoreSpanTwo.innerHTML = scoreTwo.toString();
}   

function vsComputer() {
  vsComputerBolean = true;
  vsSmartComputerBolean = false;
  whoAgainstWhom.innerHTML = "Payer VS schtupid Computer";
  playerTwoNameContainer.classList.add("hide");
  totalReset();
}

function vsPlayer() {
  vsComputerBolean = false;
  vsSmartComputerBolean = false;
  whoAgainstWhom.innerHTML = "Payer VS Player";
  playerTwoName = "Player 2";
  playerTwoNameContainer.classList.remove("hide");
  totalReset();
}

function vsSmartComputer() {
  vsComputerBolean = false;
  vsSmartComputerBolean = true;
  whoAgainstWhom.innerHTML = "Payer VS schmart Computer";
  playerTwoNameContainer.classList.add("hide");  
  totalReset();
}



function changePlayerName(e) {

  if(e.path[0].className === "button--default names__submit-one" || (e.keyCode === 13 && e.path[0].className === "names__input-one") ){

    if (playerOneNameInput.value){
      playerOneName = playerOneNameInput.value;
      playerOneNameOutput.innerHTML = playerOneName;
      scoreTextOne.innerHTML = playerOneName.toString() + ":";
      playerOneNameOutput.style.color = playerOneColor;
    }

  } else if(e.path[0].className === "button--default names__submit-two" ||(e.keyCode === 13 && e.path[0].className === "names__input-two") ){
    if (playerTwoNameInput.value){
      playerTwoName = playerTwoNameInput.value;
      playerTwoNameOutput.innerHTML = playerTwoName;
      scoreTextTwo.innerHTML = playerTwoName.toString() + ":";
      playerTwoNameOutput.style.color = playerTwoColor;
    }
  }
}

function playerOneWillBegin(){
  whoBegins = 1;
  activePlayer = whoBegins;
  reset();
}

function playerTwoWillBegin(){

  whoBegins = 2;
  activePlayer = whoBegins;
  reset();

}

function computerBegins() {
  if (activePlayer === 2 && vsSmartComputerBolean) {
    smartComputerTurn();
  }
  if (activePlayer === 2 && vsComputerBolean) {
    stupidComputerTurn();
  }
}


// EVENT LISTENERS --------------------------------------------


cvs.addEventListener("click", click);

vsComputerBtn.addEventListener("click", vsComputer);
vsPlayerBtn.addEventListener("click", vsPlayer);
vsSmartComputerBtn.addEventListener("click", vsSmartComputer);

playerOneBegins.addEventListener("click", playerOneWillBegin);
playerTwoBegins.addEventListener("click", playerTwoWillBegin);

resetBtn.addEventListener("click",reset);
totalResetBtn.addEventListener("click",totalReset);

submitPlayerOneName.addEventListener("click",changePlayerName);
submitPlayerTwoName.addEventListener("click",changePlayerName);
playerOneNameInput.addEventListener("keyup",changePlayerName);
playerTwoNameInput.addEventListener("keyup",changePlayerName);