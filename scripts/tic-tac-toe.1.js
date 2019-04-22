const cvs = document.getElementById("tic-tac-toe");
const ctx = cvs.getContext("2d");
const scoreContainer =  document.querySelector(".score");
const gameContainer = document.querySelector(".tic-tac-toe");

const scoreSpanOne = document.querySelector(".score__player-one-score");
const scoreSpanTwo = document.querySelector(".score__player-two-score");
const scoreTextOne = document.querySelector(".score__player-one");
const scoreTextTwo = document.querySelector(".score__player-two");

const whoAgainstWhom = document.querySelector(".score__sub-title");

const vsComputerBtn = document.querySelector(".vs-computer");
const vsPlayerBtn = document.querySelector(".vs-player");
const resetBtn = document.querySelector(".reset");

var scoreOne = 0;
var scoreTwo = 0;

whoAgainstWhom.innerHTML = "Payer VS Computer";

const ROW = 3;
const COL = ROW;
const SQ = squareSize = 80;
const VACANT = "white"; 


canvasWidth = ROW * SQ;
canvasHeight = ROW * SQ;


var playerOneColor = "blue";
var playerTwoColor = "orange";




cvs.setAttribute( "width", canvasWidth.toString() );
cvs.setAttribute( "height", canvasHeight.toString() );
scoreContainer.style.width = canvasWidth.toString() + "px";
gameContainer.style.width = canvasWidth.toString() + "px";


scoreTextOne.style.color = playerOneColor.toString();
scoreTextTwo.style.color = playerTwoColor.toString();




// !!!!!!!!!!!!!!!!!! BOARD [y][x]   ([row][column])   and not [x][y] because of the readability of the board in the terminal !!!!!!!!!!!
let board = [];

function vacantBoard() {
    
    for (r = 0; r < ROW; r++){
        board[r] = [];
        for(c = 0; c < COL; c++){
            board [r][c] = VACANT;
        }
    }
};
vacantBoard();

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
};    




var vsComputerBolean = true;
var computersTurn = false;

var player = 1;
var activePlayer = 0;
var win = false;

function click(e) {

    var xPosition = e.clientX;
    var yPosition = e.clientY;
    
    clickedCol = Math.floor(xPosition/SQ);
    clickedRow = Math.floor(yPosition/SQ);
    
    if(board[clickedRow][clickedCol] == VACANT){

        player++;
        activePlayer = player%2 + 1;

        if (activePlayer == 1) {
            drawSquare(clickedCol, clickedRow, playerOneColor);
        } else {
            drawSquare(clickedCol, clickedRow, playerTwoColor);
        }

        whoWins();

        if (vsComputerBolean && !win) {
        
            var randomCol = Math.floor(Math.random()*3);
            var randomRow = Math.floor(Math.random()*3);


            while(board[randomCol][randomRow] !== VACANT){
                var randomCol = Math.floor(Math.random()*3);
                var randomRow = Math.floor(Math.random()*3);
            }

            player++;
            activePlayer = player%2 + 1;

            if (activePlayer == 1) {
                drawSquare( randomRow, randomCol , playerOneColor);
            } else {
                drawSquare(randomRow, randomCol, playerTwoColor);
            }

            whoWins();

        }




    }




        // WHY IS IT DESTROYING THE WIN FUNCTION?!?!?!?!?!!?!?!?!?!?!?!?!?!?


        // if (vsComputerBolean ) {
 
            // var randomCol = Math.floor(Math.random()*3);
            // var randomRow = Math.floor(Math.random()*3);


        // // //     while(board[randomCol][randomRow] !== VACANT){
        // // //         var randomCol = Math.floor(Math.random()*3);
        // // //         var randomRow = Math.floor(Math.random()*3);
        // // //         if(fullBoard()){
        // // //             console.log("full board");
        // // //             break;
        // // //         }
        // // //     }

        // //     player++;
        // //     activePlayer = player%2 + 1;
        
        // //         if (activePlayer == 1) {
        // //             drawSquare(2, 2, playerOneColor);
        // //         } else {
        // //             drawSquare(1, 1, playerTwoColor);
        // //         }


        // }

        // whoWins();

}

var fullBoard = false;

function drawn(){

    if(!win){
        fullBoard = true;
        
        for (r = 0; r < ROW; r++){
            for(c = 0; c < COL; c++){
                if(board [r][c] == VACANT){
                    fullBoard = false;
                }
            }
        }

        if(fullBoard){
            setTimeout(function() {
                window.confirm( "Its a drawn!" );
                reset();
            }, 300);
        }
    }

};





function whoWins() {

    if (activePlayer == 1) {

        winRow(playerOneColor, activePlayer);
        winCol(playerOneColor, activePlayer);
        winDiagonal(playerOneColor, activePlayer);
        drawn();

    } else {

        winRow(playerTwoColor, activePlayer);
        winCol(playerTwoColor, activePlayer);
        winDiagonal(playerOneColor, activePlayer);
        drawn();
    }
};


function winRow(activePlayerColor, activePlayer) {
    for (r = 0; r < ROW; r++){
        win = true;
        for(c = 0; c < COL; c++){

            if(board[r][c] !== activePlayerColor){
                win = false;
            }

        }

        if (win == true){

            increaseScore(activePlayer);

            setTimeout(function() {
                window.confirm( "player " + activePlayer + " --- with the color " + activePlayerColor + " --- wins with 3 in a row!!!" );
                reset();
            }, 300);

            break;
        }
    }
}


function winDiagonal(activePlayerColor, activePlayer) {

    win = false;

    if(
    board[0][0] == activePlayerColor && board[1][1] == activePlayerColor && board[2][2] == activePlayerColor ||
    board[0][2] == activePlayerColor && board[1][1] == activePlayerColor && board[2][0] == activePlayerColor
    ){
         win = true;
    }

    if (win == true){

        increaseScore(activePlayer);

        setTimeout(function() {
            window.confirm( "player " + activePlayer + " --- with the color "+ activePlayerColor + " --- WINS with 3 in a DIAGONAL!" );
            reset();
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

        if (win == true){

            increaseScore(activePlayer);

            setTimeout(function() {
                window.confirm( "player " + activePlayer + " --- with the color "+ activePlayerColor + " --- wins with 3 in a line!" );
                reset();
            }, 300);
 
            break;
        }
    }
}





function increaseScore(activePlayer) {

    if (activePlayer == 1){
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

    player = 1;
    win = false;

}

function totalReset() {

    reset();
    scoreOne = 0;
    scoreTwo = 0;

};      





function vsComputer() {
    vsComputerBolean = true;

};

function vsPlayer() {
    vsComputerBolean = false;
};




cvs.addEventListener("click", click);

vsComputerBtn.addEventListener("click", vsComputer);
vsPlayerBtn.addEventListener("click", vsPlayer);
resetBtn.addEventListener("click",totalReset);

