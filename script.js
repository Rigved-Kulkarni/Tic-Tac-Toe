console.log("Welcome to Tic Tac Toe");
let turn = 'X';
let gameOver = false;
//function to change the turn
const change = function () {
    // return turn === 'X' ? 'O' : 'X';
    if (turn === 'X') {
        return 'O';
    } else {
        return 'X';
    }
}

//function to check win 
const checkWin = function () {
    //selected all the elements of clss name boxTest
    let boxTexts = document.getElementsByClassName('boxText');
    //created an array of all the winning possibilites i.e vertically, horizontally and diagonally
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " WON !!!"
            gameOver = true;
            if (boxTexts[e[0]].innerText === 'X') {
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            }
            else {
                document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "150px"

            }
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let e = element.querySelector('.boxText');
    element.addEventListener('click', function () {
        if (e.innerText === '') {
            e.innerText = turn;
            turn = change();
            checkWin();
            if (!gameOver) {
                //getting all the elemetns of class info and selecting the first element of info class (hence 0 index is mentioned)
                document.getElementsByClassName('info')[0].innerText = `Turn of  ${turn}`;
            }
        }
    })
})

//Add onclick listner to reset button
reset.addEventListener('click', function () {
    //we have selected all the queries of class named boxText
    let boxTexts = document.querySelectorAll('.boxText');
    //Reset applied for X-O 
    Array.from(boxTexts).forEach(element => {
        element.innerText = '';
    });
    //Reset applied for information of the game

    //After the game is finished and X is won then after reset button the game should start again with X. Else game will start with O
    turn = 'X';
    gameOver = false;
    //Used to start over again i.e "Turn of X"
    document.getElementsByClassName('info')[0].innerText = `Turn of  ${turn}`;

    //Reset applied for the images or the gifs
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "0px"

})