const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]

function createBoard() {
    startPieces.forEach((startPieces, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPieces
        square.firstChild?.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
        const row = Math.floor((63 - i) / 8) + 1
        if(row % 2 === 0 ){
            square.classList.add(i % 2 === 0 ? "beige" : "brown") 
        }else{
            square.classList.add(i % 2 === 0 ? "brown" : "beige") 
        }

        if (i <= 15){
            square.firstChild.firstChild.classList.add('black')
        }
        
        if (i >= 48){
            square.firstChild.firstChild.classList.add('white')
        }



        gameBoard.append(square)
    })
}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragstart)
})

function dragstart(e) {
    console.log(e)   
}