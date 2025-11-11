let playerRed = "R";
let playerYellow = "Y";


let currentPlayer = playerRed;

let gameOver = false;
let board;
let currentCol;

let rows = 6;
let col = 7;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [];
    currentCol = [5, 5, 5, 5, 5];

    for(let r = 0; r < rows; r++){
        
        let row = [];

        for(let c = 0; c < col; c++){

            row.push(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            tile.classList.add("tile");

            tile.addEventListener("click", setPiece);

            document.querySelector(".Game").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){

    if(gameOver){
        return;
    }

    let coordinates = this.id.split("-");
    
    let r = parseInt(coordinates[0]);

    let c = parseInt(coordinates[1]);


    r = currentCol[c];

    if(r < 0){

        return;
    }

    board[r][c] = currentPlayer;

    let tile = document.getElementById(r.toString() + "-" + c.toString());

    if(currentPlayer == playerRed){
        
        tile.classList.add("red_piece");

        currentPlayer = playerYellow;
    }
    else{
        
        tile.classList.add("yellow_pieces");
        
        currentPlayer = playerRed;
    }

    r -= 1;
    currentCol[c] = r;
}