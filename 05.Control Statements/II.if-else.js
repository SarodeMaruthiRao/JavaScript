/* 2.If-else Statement
     - In this statement if condition is true block of statement executed.
     - If the condition is false the else block will be executed.
     - Syntax:-
         if (condition) 
        {
            // Code to execute if condition is true
        } 
        else 
        {
           // Code to execute if condition is false
        }

*/

// Example - 1
let num = 6;
if (num % 2 == 0)
{
    console.log("Even Number");
}
else
{
    console.log("Odd Number")
}

// Example - 2
let mode = "Dark";
let color;

if (mode == "Dark")
{
    color = "Black";
    console.log("Mode is black")
}
else
{
   color = "light";
   console.log("Mode is White ")
}
