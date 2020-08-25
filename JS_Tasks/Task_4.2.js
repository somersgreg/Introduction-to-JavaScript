/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number


// Print/Keep Score
// choose Rock Paper Scissors with single buttons.
//      numbers? RPS?
// Add Lizard and Spock
    // 2 beats 3
    // 3 beats 1 etc.

//Get the computers choice
function RNG(){
    return Math.floor(Math.random() * 3)+1;
}
//Get the users choice
var userChoice = prompt("Play or Die: 1-Rock 2-Paper 3-Scissors");

//Tell the user what rng chose.
// RNG();
var val = RNG();
alert("You chose " + userChoice);
alert("The computer chose " + val);
//Check for a tie
if(val == userChoice){
    alert("It's a tie");
//Need a check for a valid choice here
    }else if  // filter all winning scenarios
        (userChoice == 1 && val == 3 ||
        userChoice == 2 && val == 1 ||
        userChoice == 3 && val == 2) {
        alert(`You Win!!!!!!!`)
    } else {
        alert(`You Lost.`)
    }
