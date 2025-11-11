// Define the two players

let playerRed = "R";
let playerYellow = "Y";

// set current player to start as red
let currentPlayer = playerRed;

// track if the game is over
let gameOver = false;

// represents board
let board;

// track the current available row in each column
let currentCol;

let rows = 6;
let col = 7;


window.onload = function(){
    setGame();
}


// game board setup
function setGame(){

    // initialize the board array
    board = [];

    // start at the bottom row, which is row 
    currentCol = [5, 5, 5, 5, 5, 5, 5];

    // loop through each row
    for(let r = 0; r < rows; r++){
        
        let row = [];

        // go through each column
        for(let c = 0; c < col; c++){

            // start with an empty space
            row.push(' ');

            // create a circle
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            tile.classList.add("tile");

            // add click event
            tile.addEventListener("click", setPiece);

            // add tile to board in html
            document.querySelector(".Game").append(tile);
        }

        // add row to the board
        board.push(row);
    }
}

function setPiece(){

    if(gameOver){
        return;
    }

    // get the row and col of the tile clicked
    let coordinates = this.id.split("-");
    
    let r = parseInt(coordinates[0]);

    let c = parseInt(coordinates[1]);


    // use the lowest available row in that col
    r = currentCol[c];

    // check if the col is full (if it is theres no rows free)
    if(r < 0){

        return;
    }

    // current player moves
    board[r][c] = currentPlayer;

    // find tile element
    let tile = document.getElementById(r.toString() + "-" + c.toString());

    // color based on the current player
    if(currentPlayer == playerRed){
        
        tile.classList.add("red_piece");

        currentPlayer = playerYellow;
    }
    else{
        
        tile.classList.add("yellow_pieces");
        
        currentPlayer = playerRed;
    }

    // col tracker 
    r -= 1;
    currentCol[c] = r;

    checkWin();
}

function checkWin()
{

    // check for horizontal winners
    for(let r = 0; r < rows; r++){
        
        for(let c = 0; c < col - 3; c++){

            if(board[r][c] != ' '){

                if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){
                   
                    setWin(r,c);
                   
                    return;
                }
            }
        }
    }


    // check for vertical winners
    for(let c = 0; c < col; c++){

        for(let r = 0; r < rows - 3; r++){

            if(board[r][c] != ' '){
  
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
  
                    setWin(r,c);

                    return;
                }
            }
        }
    }

    // diagonally
    for(let r = 0; r < rows - 3; r++){
        
        for(let c = 0; c < col - 3; c++){
            
            if(board[r][c] != ' '){
                
                if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){

                    setWin(r, c);

                    return;
                }
            }
        }
    }

    for(let r = 3; r < rows; r++){
        
        for(let c = 0; c < col - 3; c++){

            if(board[r][c] != ' '){

                if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){

                    setWin(r, c);

                    return;
                }
            }
        }
    }


}

function setWin(r, c){

    let winner = document.getElementById("winner");

    if(board[r][c] == playerRed){
        winner.innerText = "Red Wins!";

    }
    else{
        winner.innerText = "Yellow Wins!";
    }

    gameOver = true;
}