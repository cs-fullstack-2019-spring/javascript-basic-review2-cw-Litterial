/*Ask the user to enter a 4 digit code. Ask the user to enter the password again. If the passwords are the same print
"Password is set." If the passwords are different print "ERROR, Passwords are different."*/


var initialpass= prompt ("Please enter a four digit passcode") //reads first pass
var finalpass= prompt ("Please re-enter it to verify.")  // reads second

if (initialpass==finalpass)
    console.log("Passcode is set.")
else
    console.log("Error. Passcodes are different.")