/*
Create a function that returns 5 more than the integer sent to it. Assume the user only enters integers. Create a
different function that adds " is awesome" to any strings sent to it.
Challenge: If the wrong data type is sent to one of the functions print "ERROR". */

function add5(num)  // adds 5
{
    if(isNaN(num))    // test for number
        return "Error.";
    else
        return     parseInt(num)+5;
}

function isawesome (sentence) // says "string" is awesome.
{
    if (typeof(sentence)== typeof("k")) /// ues the typeof function to determine if the user input is a string
        return( sentence + " is awesome.")
    else                              // if it's not a string, return false
        return "Error."
}

console.log(add5("p")); // calls functions
console.log(isawesome(3));   // calls functions