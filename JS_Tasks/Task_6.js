/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


function annoyingSong (num){
    console.log("num", num)
    console.log("num plus 1", num+=1)
    for (i=num; i >=0; i--){  // the condition is keep running until not true!!
    console.log("annoyingSong -> i", i)
    console.log (`${i}, bottles of soda on the wall, ${i} bottles of soda, take one down pass it around", ${i-1} bottles of soda on the wall`)}
    return num;
}
annoyingSong(5)