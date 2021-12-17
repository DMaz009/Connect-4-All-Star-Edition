# CONNECT 4 COLOR X Edition

## Link

https://dmaz009.github.io/Connect-4-All-Star-Edition/

## How To Play

First, decide who goes first and what color each player will have.
Players must alternate turns, and only one X can be set in each turn.
On your turn, set one of your colored X's into any of the seven columns.
The game ends when there is a 4-in-a-row in any direction or a stalemate.
The starter of the previous game goes second on the next game.

## Project Requirements

...render a game in the browser using JavaScript (you may use jQuery if you like) for DOM manipulation, with separate files for HTML, CSS, and JavaScript, as we have done in class

...switch turns between two players. If your game doesn't make sense for two players talk to your local instructor about it, exceptions can be made for sufficiently challenging one player games.

...implement logic for winning & visually display which player won (or lost)**

Your event listeners/handlers should collect input from the user, not do game logic. Game logic goes in the game object.

Your game should be controlled by a game object that has properties to store any data that's important to your game, and methods to control the game flow (that call each other and/or are called by the event listeners/handlers)

Classes: if you have, say, 100, or even 8 aliens that you are shooting or bubbles that you are popping or mushrooms that you are collecting or cards that you are showing (or whatever) in your game, and they all have the same basic structure and functionality, consider instantiating classes for them

Again, a function should do one thing and do it well. A function that prints the scoreboard should simply print the scoreboard, not try to figure out who is winning.

...be deployed online, where the rest of the world can access it (we will show you how)

...use semantic markup for HTML and CSS (adhere to best practices)

...be reasonably complex (this will be planned out in your proposal, and followed up in "stand-ups" each project day)
