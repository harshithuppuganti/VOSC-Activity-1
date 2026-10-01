const cells = document.querySelectorAll(".board button");
const status = document.getElementById("status");
const restart = document.getElementById("restart");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", ""];

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

        if (board[index] !== "") {
            return;
        }

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();
    });
});

function checkWinner() {

    for (let pattern of winningPatterns) {

        const [a, b, c] = pattern;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            status.textContent = "Player " + currentPlayer + " Wins!";
            cells.forEach(cell => cell.disabled = true);
            return;
        }
    }

    if (!board.includes("")) {
        status.textContent = "It's a Draw!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = "Player " + currentPlayer + "'s Turn";
}

restart.addEventListener("click", () => {

    board = ["", "", "", "", "", "", "", ""];
    currentPlayer = "X";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.disabled = false;
    });

    status.textContent = "Player X's Turn";
});