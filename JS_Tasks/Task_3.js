/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

var doggo = prompt("Enter doggo stats thusly: y m lbs","0 5 5");
if (doggo == null || doggo == "") {
    txt = "User cancelled the prompt.";
  } else {
    var arr = doggo.split(" ");
    console.log("Array of elements", arr);
    if (arr[0]>0) {
        if (arr[2]<=5){
            food = arr[2]*.05;
        } else if (arr[2]<=10){
                food = arr[2]*.04;
            } else if (arr[2]<=15){
                    food = arr[2]*.03;
            } else {
                food = arr[2]*.02;
            }
        console.log("Feed your adult doggo ", food," lbs of food.")
console.log("        _")
console.log("        / )")
console.log("     ,-(,' ,---.")
console.log("    (,-.\\,' `  _)-._")
console.log("       ,' `(_)_)  ,-`--.")
console.log("      /          (      )")
console.log("     /            `-.,-'|")
console.log("    /                |  /")
console.log("    |               ,^ /")
console.log("   /                   |")
console.log("   |                   /")
console.log("  /                   /")
console.log("  |                   |")
console.log("  |                   |")
console.log(" /                    \\")
console.log(",.|                    |")
console.log("(`\\ |                    |")
console.log("(\\  |   --.      /  \\_   |")
console.log("(__(   ___)-.   | '' )  /)")
console.log("     `---...\\\\\\--(__))/-'-'");

    } else {
        food = arr[2]*.05;
        tillGrown = 12-arr[1];
        console.log("Your doggo is a puppers still!");
        console.log("Feed your puppers doggo ", food," lbs of food.");
        console.log("Remember to change to adult feeding plan in", tillGrown, "months.");
        console.log("              _ _")
        console.log("        _(,_//  \\____________")
        console.log("        |`. \\_@_@   `.     ,'")
        console.log("        |\\ \\ .        `-,-'")
        console.log("        || |  `-.____,-'")
        console.log("        || /  /")
        console.log("        |/ |  |")
        console.log("   `..     /   \\")
        console.log("     \\\\   /    |")
        console.log("     ||  |      \\")
        console.log("      \\\\ /-.    |")
        console.log("      ||/  /_   |")
        console.log("      \\(_____)-'_)")
    }
  }
// Pseudocoding:
// make two new functions called adult and puppy
// arr[0]=yrs ; arr[1]=months; arr[2]=weight
// input age(years | months) and weight via alert pop up with 15lbs, (1yr | 0m) as default
// if age is > 1 then a simple set of food based on weight in four groups
// age under 1yr is in 3 groups.
// round the result as pounds


