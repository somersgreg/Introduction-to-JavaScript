/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function grade(score){
    if (score > 89){
        lGrade ="A"
    }
    else if (score > 79){
        lGrade="B"
    }
    else if (score > 69){
        lGrade="C"
    }
    else if (score > 59){
        lGrade="D"
    }
    else {
    lGrade="F";
    }console.log(`Your score of ${score} earns a letter grade of ${lGrade}!`)}
grade(89);