/* Loop
   - it is a block statements that can execute repeatly multiple times
   - Types of Loops
     1.While 
     2.Do-While
     3.For
     4.For-in
     5.For-of


*/


/* 1.While Loop
     - The while loop executes a block of code as long as the condition is true.
     - Important Points:-
       1.Starting point
       2.Condition
       3.Increment
     - Syntax:
        while (condition) 
        {
             // Code to execute
        }

*/

//Example - 1 --> Display 1,..10 numbers
let i = 1;
while (i<=10)
{
     console.log(i); // 1 2 3 4 5 6 7 8 9 10
     i++;
}

// Example - 2 --> Display only even number betwwen 1,...10
let n = 2;
while (n<=10)
{
     console.log(n); // 2 4 6 8 10
     n=n+2;
}

// Example - 3 // Descending (10-1)
let d = 10;
while (d>=1)
{
     console.log(d); // 10 9 8 7 6 5 4 3 2 1 
     d=d-1
}