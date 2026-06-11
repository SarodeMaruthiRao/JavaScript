
/* Functions
   - Function is a block of statements which will perform a specific task.
   - Function is executed when fuction is called
   - Syntax
     function function_name(p-1,p-2,..,p-n)
     {
        //code
     } 

*/

// Without Parameters
function greeting ()
{
    console.log("Hello!Good Morning")
}
greeting();

function wish()
{
    return ("Happy Bithday");
}
console.log(wish());




// Using parameters
function Mul(a,b)
{
    console.log(a*b);
}
Mul(10,20)

// Example - 2
function add(a,b)
{
    return a+b;
}
let result = add(300,200)
console.log(result)