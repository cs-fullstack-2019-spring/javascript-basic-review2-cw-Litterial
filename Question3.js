
/*Create a function that is sent two integers, then print from the first integer to the second integer.
Assume the first integer is less than the second integer.*/


var small= parseInt(prompt("Please enter a number."));
var big = parseInt(prompt("Please enter a greater number."))


function countup(least, greatest)
{
    while (least<=greatest) // counts from the smallest number to the greatest
    {
        console.log(least);
        least++;  // increments
    }

}

countup(small,big); // calls