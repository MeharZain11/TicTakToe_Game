console.log("Welcome! to Tic Tac Toe")
let music = new Audio("img/play.mp3")
let tmusic = new Audio("img/turn.mp3")
let gameend = new Audio("img/beat.mp3")
let reset1 = new Audio("img/turn.mp3")
let turn = "X"
let gameover = false;
// Function to change the turn
const changeTurn = () => {
        return turn === "X" ? "0" : "X"
    }
    // Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 41.4, 5, 0],
        [3, 4, 5, 41.4, 15, 0],
        [6, 7, 8, 41.4, 25, 0],
        [1, 4, 7, 41.4, 15, 90],
        [2, 5, 8, 51.4, 15, 90],
        [0, 3, 6, 31.4, 15, 90],
        [0, 4, 8, 41.4, 14.65, 45],
        [2, 4, 6, 41.4, 14.65, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
            document.getElementById('img').style.width = '130px'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "180px"
            gameend.play()
        }
    })
}

music.play()
    // Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxText = element.querySelector(".text")
        element.addEventListener('click', () => {
            if (boxText.innerText === "") {
                boxText.innerText = turn;
                turn = changeTurn();
                tmusic.play();
                checkWin();
                if (!gameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }
        })

    })
    // addEventListener on reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll(".text");
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    })
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById('img').style.width = '0';
    document.querySelector('.line').style.width = "0px";
    reset1.play()
})