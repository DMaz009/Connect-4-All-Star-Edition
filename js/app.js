console.log("Connect-4");


//Global variables//


let player1 = "";
let player2 = "";
let userName = "";


// Selectors //


const tableRow = document.getElementsByTagName('tr')

const tableSlots = document.querySelectorAll('td')

const slots = document.querySelectorAll('.slots')

const playerTurn = document.querySelector('.playerTurn')

const reset = document.querySelector('.reset')

//Events//


//Creating a loop to find the positions the user is clicking on..
// adding a lick event to the table slots then logging it's position
// loop through all the tableSlots
for(let i = 0; i < tableSlots.length; i++) {
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

let currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;
console.log(playerTurn);


//Need to go through all the slots and add in an event listener.
//Within it is a callback function to get each individual slot

Array.prototype.forEach.call(tableSlots, (cell) => {
  cell.addEventListener('click', changeColor)
  cell.style.backgroundColor = 'white';
})


// Need to make a function that can change the color of the tableSlots

function changeColor (event){
// function taking in an event.
// when we click on the slot it takes in the cellIndex
  let column = event.target.cellIndex;
  let row = []
// Need to have app check the bottom row first and go back up.
// within the loop go through the children cells of the rows and take the index.
  for(let i = 5; i >= 0; i--){
    console.log(tableRow[i]);
    if (tableRow[i].children[column].style.backgroundColor == 'white') {
      row.push(tableRow[i].children[column])
// // need to be able to change turns...
      if(currentPlayer === 1){
        row[0].style.backgroundColor = player1Color;
// if the current player is player1 take the first index of that array and turn
//.. it into player1's color.
        if(horizontalCheck()){
          return(alert('winner'));
        }
        playerTurn.textContent = `${player2}'s turn!'`
        return currentPlayer = 2;
      } else{
          row[0].style.backgroundColor = player2Color
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
  return (one === two && one === three && one === four &&
  one !== 'white')
}

//just looking if they won horizontally
function horizontalCheck() {
// go through the 6 rows
  for(let i = 0; i < tableRow.length; i++){
// creating a column for loop within the row for loop
// look if 4 color in from column to column match horizontally.
    for(let col = 0; col < 4; col++){
// if there is a color match moving left to right.
// colormatch function takes in 4 parameters to compare.
      if(colorMatch(tableRow[i].children[col].style.backgroundColor,
        tableRow[i].children[col+1].style.backgroundColor,
        tableRow[i].children[col+2].style.backgroundColor,
        tableRow[i].children[col+3].style.backgroundColor)) {
          return true
        }
    }
  }
}















//
