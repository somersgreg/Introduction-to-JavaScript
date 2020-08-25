/************************************************************** Stretch **************************************************************/
getVowels(`Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
Hint - you may need to study tomorrow's traning kit on arrays
try looking up the .includes() method`)

function getVowels(str) {
    var m = str.match(/[aeiou]/gi); // this is regEx. g - global im guessing, i - insensitive to case.
    console.log("Vowels in your sentence:" +m.length)
    // return m === null ? 0 : m.length;  // i need to learn better the ? format and why the colon.
  }

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


