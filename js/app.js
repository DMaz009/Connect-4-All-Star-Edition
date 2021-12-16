console.log("Connect-4");


//Global variables//

let player1 = "";
let player2 = "";
let userName = "";
let currentPlayer = 1;

// Selectors //


const tableRow = document.getElementsByTagName('tr')

const tableSlots = document.querySelectorAll('td')

const slots = document.querySelectorAll('.slots')

const playerTurn = document.querySelector('.playerTurn')

const reset = document.querySelector('.reset')

//Events//


//Creating a loop to find the positions the user is clicking on..
// adding a click event to the table slots then logging it's position
// loop through all the tableSlots
for (let i = 0; i < tableSlots.length; i++) {
    //for each celll add an event listener//
    tableSlots[i].addEventListener('click', (event) => {
        //at the event click assign row, assign column.
        console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
    })
}

// Game Logic //

//Let the players state their name.


player1 = prompt('Player One: Enter your name. You will be red')


let player1Color = 'red';


player2 = prompt('Player Two: Enter your name. You will be blue')


let player2Color = 'blue';


//Need to go through all the slots and add in an event listener.
//Within it is a callback function to get each individual slot



function reset1() {
    currentPlayer = 1;
    playerTurn.textContent = `${player1}'s turn!`;
    Array.prototype.forEach.call(tableSlots, (cell) => {
        cell.addEventListener('click', changeColor)
        cell.style.backgroundColor = 'white';
    })
    console.log(playerTurn);
}
reset1();
// Need to make a function that can change the color of the tableSlots

function changeColor(event) {
    // function taking in an event.
    // when we click on the slot it takes in the cellIndex
    let column = event.target.cellIndex;
    let slot;
    // Need to have app check the bottom row first and go back up.
    // within the loop go through the children cells of the rows and take the index.
    for (let i = 5; i >= 0; i--) {
        console.log(tableRow[i]);
        if (tableRow[i].children[column].style.backgroundColor == 'white') {
            slot = tableRow[i].children[column]
            // // need to be able to change turns...
            if (currentPlayer === 1) {
                slot.style.backgroundColor = player1Color;
                // if the current player is player1 take the first index of that array and turn
                //.. it into player1's color.
                if (horizontalCheck() || verticalCheck()) {
                    reset1()
                    return (alert(`${player1} is the winner!`));
                }
                playerTurn.textContent = `${player2}'s turn!'`
                return currentPlayer = 2;
            } else {
                if (horizontalCheck() || verticalCheck()) {
                    reset1()
                    return (alert(`${player2} is the winner!`));
                }
                slot.style.backgroundColor = player2Color
                playerTurn.textContent = `${player1}'s turn!'`
                return currentPlayer = 1;
            }
        }
    }
}

// WIN Function to compare 4 slots
// to ensure they are all the same color
//creating a function where 4 parameters have to be the same
function colorMatch(one, two, three, four) {
    if (one === two && one === three && one === four &&
        one !== 'white')
    if (one === game.player1.color){
      game.player1.winTally()
    } else {
      game.player2.winTally()
    }
}

//just looking if they won horizontally
function horizontalCheck() {
    // go through the 6 rows
    for (let i = 0; i < tableRow.length; i++) {
        // creating a column for loop within the row for loop
        // look if 4 color in from column to column match horizontally.
        for (let col = 0; col < 3; col++) {
            // if there is a color match moving left to right.
            // colormatch function takes in 4 parameters to compare.
            if (colorMatch(tableRow[i].children[col].style.backgroundColor,
                    tableRow[i].children[col + 1].style.backgroundColor,
                    tableRow[i].children[col + 2].style.backgroundColor,
                    tableRow[i].children[col + 3].style.backgroundColor)) {
                return true
            }
        }
    }
}

function verticalCheck(playerName) {
    for (let col = 0; col < 6; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatch(tableRow[row].children[col].style.backgroundColor,
                    tableRow[row + 1].children[col].style.backgroundColor,
                    tableRow[row + 2].children[col].style.backgroundColor,
                    tableRow[row + 3].children[col].style.backgroundColor)) {
                alert(`${playerName} has won!`)
            }
        }
    }
}

function diagonalCheck(playerName) {
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatch(tableRow[row].children[col].style.backgroundColor,
                    tableRow[row + 1].children[col + 1].style.backgroundColor,
                    tableRow[row + 2].children[col + 2].style.backgroundColor,
                    tableRow[row + 3].children[col + 3].style.backgroundColor)) {
                alert(`${playerName} has won!`)
            }

        }
    }
    for (let col = 0; col < 4; col++) {
        for (let row = 5; row > 2; row--) {
            if (colorMatch(tableRow[row].children[col].style.backgroundColor,
                    tableRow[row - 1].children[col + 1].style.backgroundColor,
                    tableRow[row - 2].children[col + 2].style.backgroundColor,
                    tableRow[row - 3].children[col + 3].style.backgroundColor)) {
                alert(`${playerName} has won!`)
              }

          }
      }
}


function drawCheck(playerName){
  let fullSlot = []
  for (i=0; i < tableSlots.length; i++){
    if (tableSlots[i].style.backgroundColor !== 'white'){
        fullSlot.push(tableSlots[i]);
    }

    if (fullSlot.length === tableSlots.length){
        alert(`There has been a tie!`)
    }
  }
}

function clearBoard() {
  if (horizontalCheck === true || verticalCheck === true ||
     diagonalCheck === true || drawCheck === true) {
       setInterval(() => {
        cell.style.backgroundColor = 'white';
    }, 2000);    // Set all slots to white for new game.
  }
}


for (let i = 0; i < tableSlots.length; i++) {
    //for each celll add an event listener//
    tableSlots[i].style.backgroundColor = "white";
    tableSlots[i].addEventListener('click', (event) => {
        at the event click assign row, assign column.
        let column = event.target.cellIndex;
        let slot;
        // Need to have app check the bottom row first and go back up.
        // within the loop go through the children cells of the rows and take the index.
        for (let i = 5; i >= 0; i--) {
            // console.log(tableRow[i].children[column].style.backgroundColor);
            if (tableRow[i].children[column].style.backgroundColor === 'white') {
                slot = tableRow[i].children[column]
                // console.log("test");
                // // need to be able to change turns...
                if (game.currentPlayer === 1) {
                    slot.style.backgroundColor = game.player1.playerColor;
                    console.log("Player: ", game.currentPlayer)
                    console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
                    checkForWinner(game.currentPlayer.name)
                    game.currentPlayer = 2

                    return
                } else {
                   slot.style.backgroundColor = game.player2.playerColor;
                   console.log("Player: ", game.currentPlayer)
                   console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
                   checkForWinner(game.currentPlayer.name)
                   game.currentPlayer = 1

                   return
                }
            }
        }
    })
  // console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);

}
//
