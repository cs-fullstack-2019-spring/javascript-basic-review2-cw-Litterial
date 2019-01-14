/*Ask the user for 5 numbers. Print the sum of the 5 numbers.*/

num1= parseInt(prompt(" This program will add the total of your 5 numbers. Please enter your first number."))
num2= parseInt(prompt("Please enter your second number."))
num3=parseInt(prompt("Please enter your third number."))
num4=parseInt(prompt("Please enter your fourth number."))
num5=parseInt(prompt("Please enter your final number."))

function sum(a,b,c,d,e) //dummy variables for user input
{
    return ("Your total is: " + (num1+num2+num3+num4+num5));
}

console.log(sum(num1,num2,num3,num4,num5))