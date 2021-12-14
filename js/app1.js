console.log("Connect-4");


//Global variables//

// let player1 = prompt('Player One: Enter your name. You will be Pink');
// let player2 = prompt('Player Two: Enter your name. You will be Purple');
let userName = "";
let currentPlayer = 1;
let slot;

// let player1Color = 'pink';
// let player2Color = 'purple';

// Selectors //


const tableRow = document.getElementsByTagName('tr')

const tableSlots = document.querySelectorAll('td')

const slots = document.querySelectorAll('.slots')

const playerTurn = document.querySelector('.playerTurn')

const reset = document.querySelector('.reset')



// Class

class Player {
  constructor(playerColor, name, wins) {
    this.playerColor = playerColor
    //this.currentPlayer = 1
    this.name = name
    this.wins = wins
  }
}

// let player1;
// const naming = (event) => {
//   event.preventDefault()
//   console.log(event.target.fname.value)
//   playerName = event.target.fname.value
//   playerColor = event.target.color.value
//   console.log("I was clicked")
//
//   player1 = new Player(playerColor, playerName, 0)
// }

// const player1 = new Player( )
//
// const player2 = new Player( )



const game = {
  player1: "",
  player2: "",
  currentPlayer: 1,
  namingPlayer: (event) => {
    event.preventDefault()
    // console.log(event.target.fname.value)
    playerName = event.target.fname.value
    playerColor = event.target.color.value
    console.log("I was clicked")

    let whichPlayer = event.target.fname.dataset.player
    if (whichPlayer === "1") {
      game.player1 = new Player(playerColor, playerName, 0)
      console.log(game.player1)
    } else {
      game.player2 = new Player(playerColor, playerName, 0)
      console.log(game.player2)
    }
  },
  newMethod: () => {

  }, 
}







// You have come to the end //
