let playerRed = "R";
let playerYellow = "Y";


let currentPlayer = playerRed;

let gameOver = false;
let board;

let rows = 6;
let col = 7;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [];

    for(let r = 0; r < rows; r++){
        
        let row = [];

        for(let c = 0; c < col; c++){

            row.push(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            tile.classList.add("tile");

            document.querySelector(".Game").append(tile);
        }
        board.push(row);
    }
}