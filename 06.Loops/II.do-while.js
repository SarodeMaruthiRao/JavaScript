/* 2.do-while Loop
    - The do-while loop executes the code at least once before checking the condition
    - First statement executed then check condition
    - Syntax:-
        do 
        {
            // Code to execute
        } while (condition);

*/

//Example - 1 --> Display 1,..10 numbers
let i = 1;
do{
    console.log(i)
    i++
}
while(i<=10)


// Example - 2 --> print atleast once
let k = 100;
do
{
  console.log(k)
  k++
}
while(k<=10)

// Example - 3 --> DIsplay number descending order
let d = 10;
do
{
   console.log(d) // 10 9 8 7 6 5 4 3 2 1
   d=d-1
}
while(d>=1)