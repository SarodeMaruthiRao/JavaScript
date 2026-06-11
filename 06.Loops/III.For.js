/* For Loop
   - The for loop is useful when the number of iterations is known.
   - Syntax:-
     for (initialization; condition; increment/decrement) 
     {
        // Code to execute
     }

*/

// Example - 1 ---> Display 1,..10 numbers
for (let i=1;i<=10;i++) 
{
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}


// Example - 2 ---> Display only even number btween 1,....,10
console.log("----List of Even numbers----")
for (let i=2;i<=10;i=i+2)
{
   console.log(i); // 2 4 6 8 10
}


// Example - 3 ---> Dispaly thenumbers in descending order
console.log("----Descending order----")
for(let d=10;d>=1;d=d-1)
{
   console.log(d) // 10 9 8 7 6 5 4 3 2 1
}