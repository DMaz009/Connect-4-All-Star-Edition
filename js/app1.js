console.log("Connect-4");


//Global variables//

let userName = "";
let currentPlayer = 1;
// let slot;

// Selectors //

const tableRow = document.getElementsByTagName('tr')

const tableSlots = document.querySelectorAll('td')

const slots = document.querySelectorAll('.slots')

const playerTurn = document.querySelector('.playerTurn')

const reset = document.querySelector('.reset')

const playerInfo = document.querySelector('#playerInfo')

const player1Score = document.querySelector('#player1Score')

const player2score = document.querySelector('#player2Score')


// Class

class Player {
  constructor(playerColor, name, wins) {
    this.playerColor = playerColor
    //this.currentPlayer = 1
    this.name = name
    this.wins = wins
  }

  winTally (){
    this.wins++
    console.log(this.wins);
    player1Score.innerText = game.player1.wins
    player2Score.innerText = game.player2.wins
    alert(`${this.name} has won! You have ${this.wins} wins!`)
    if (this.wins > 2) {
      alert("You are the champion! Hit refresh if you want to start over")
    }
  }

}

for (let i = 0; i < tableSlots.length; i++) {
    //for each celll add an event listener//
    tableSlots[i].style.backgroundColor = "white";
    tableSlots[i].addEventListener('click', (event) => {
        //at the event click assign row, assign column.
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

const game = {
  player1: "",
  player2: "",
  currentPlayer: 1,
  over: false,

  namingPlayer: (event) => {
    event.preventDefault()
    // console.log(event.target.fname.value)
    playerName = event.target.fname.value
    playerColor = event.target.color.value
    // console.log("I was clicked")

    let whichPlayer = event.target.fname.dataset.player
    if (whichPlayer === "1") {
      game.player1 = new Player(playerColor, playerName, 0)
      console.log(game.player1)
    } else {
      game.player2 = new Player(playerColor, playerName, 0)
      console.log(game.player2)
    }
  },

  colorMatch: (one, two, three, four) => {
      if (one === two && one === three && one === four &&
          one !== 'white') {
            console.log("Four vertical!")
            if (one === game.player1.playerColor){
              console.log("player 1 winTally");
              game.player1.winTally()
            } else {
              console.log("player 2 winTally");
              game.player2.winTally()
            }
            setTimeout(game.clearBoard, 500)
          }
  },

  verticalCheck: (playerName) => {
      for (let col = 0; col < 6; col++) {
          for (let row = 0; row < 3; row++) {
              if (game.colorMatch(tableRow[row].children[col].style.backgroundColor,
                      tableRow[row + 1].children[col].style.backgroundColor,
                      tableRow[row + 2].children[col].style.backgroundColor,
                      tableRow[row + 3].children[col].style.backgroundColor)) {
                  alert(`${playerName} has won!`)

              }
          }
      }
  },
  horizontalCheck: (playerName) => {
        // go through the 6 rows
        for (let i = 0; i < tableRow.length; i++) {
            // creating a column for loop within the row for loop
            // look if 4 color in from column to column match horizontally.
            for (let col = 0; col < 4; col++) {
                // if there is a color match moving left to right.
                // colormatch function takes in 4 parameters to compare.
                if (game.colorMatch(tableRow[i].children[col].style.backgroundColor,
                        tableRow[i].children[col + 1].style.backgroundColor,
                        tableRow[i].children[col + 2].style.backgroundColor,
                        tableRow[i].children[col + 3].style.backgroundColor)) {
                    alert(`${playerName} has won!`)
                }
            }
        }
  },

  diagonalCheck: (playerName) => {
      for (let col = 0; col < 4; col++) {
          for (let row = 0; row < 3; row++) {
              if (game.colorMatch(tableRow[row].children[col].style.backgroundColor,
                      tableRow[row + 1].children[col + 1].style.backgroundColor,
                      tableRow[row + 2].children[col + 2].style.backgroundColor,
                      tableRow[row + 3].children[col + 3].style.backgroundColor)) {
                  alert(`${playerName} has won!`)
              }

          }
      }
      for (let col = 0; col < 4; col++) {
          for (let row = 5; row > 2; row--) {
              if (game.colorMatch(tableRow[row].children[col].style.backgroundColor,
                      tableRow[row - 1].children[col + 1].style.backgroundColor,
                      tableRow[row - 2].children[col + 2].style.backgroundColor,
                      tableRow[row - 3].children[col + 3].style.backgroundColor)) {
                  alert(`${playerName} has won!`)
                }

            }
        }
  },

  drawCheck: (playerName) => {
    let fullSlot = []
    for (i=0; i < tableSlots.length; i++){
      if (tableSlots[i].style.backgroundColor !== 'white'){
          fullSlot.push(tableSlots[i]);
      }

      if (fullSlot.length === tableSlots.length){
          alert(`There has been a tie!`)
      }
    }
  },

  clearBoard: () => {
        for (let i=0; i<tableSlots.length; i++){
          tableSlots[i].style.backgroundColor = "white";
        }
  },

}



function checkForWinner(playerName){
  game.verticalCheck(playerName);
  game.horizontalCheck(playerName)
  game.diagonalCheck(playerName)
  game.drawCheck()
}


// You have come to the end //
