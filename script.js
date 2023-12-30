console.log("Tic-Tac-Toe");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let turnO = true; //playerX, playerO

// Two Dimensional Array 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


// LOGICAL FUNTIONS 



// Winner Checking Function 

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos3Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log(`Winner Is ${pos1Val}`);
                showWinner(pos1Val);
                count = 0; 
            }
        }

    }
};


// Box-Click Events 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box Was Clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// Match Draw Condition 

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log(count);
        if (count >= 9) {
            checkWinner();
            matchDraw();
            count = 0;
        }
        else {
            checkWinner();
        }
    });
});




// UI DISPLAY STATEMENTS 



// Winner Function //Disable Boxes
const disable_btns = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

// Show Winer Statement 
const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_btns();
}
// Match Draw Statement 
const matchDraw = () => {
    msg.innerText = `Match Is Drawn`;
    msgContainer.classList.remove("hide");
    disable_btns();
    count = 0;
}


// BUTTONS 


// Reset Game Button  //Enable BTNS
const enable_btns = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turnO = true;
    enable_btns();
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);