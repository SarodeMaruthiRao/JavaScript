
/* Switch case Statement
   - The switch statement allows testing a variable against multiple values (case).
   - If a match is found, that case block executes. The break statement stops execution after a match.
   - The default case runs if no match is found
   - Syntax:
        switch (expression) 
        {
            case value1:
                // Code for case value1
                break;
            case value2:
                // Code for case value2
                break;
            case value3:
                // Code for case value3
                break;
            default:
                // Code to execute if no case matches
        }
    - if we not use break statement it will continue and print next statement
      untill it find break statment


*/

let day = 1;
switch(day){
    case 1:
        console.log("Day is Monday");
        // break;
    case 2:
        console.log("Day is Tuesday");
        break;
    case 3:
        console.log("Day is Wednesday");
        break;
    case 4:
        console.log("Day is Thursday");
        break;
    case 5:
        console.log("Day is Friday");
        break;
    case 6:
        console.log("Day is Saturday");
        break;
    case 7:
        console.log("Day is sunday");
        break;
    default:
        console.log("Invalid day")

}

// Example - 2
let x9 = 10;
let y = 5;
switch(x9-y)
{
    case 0:
        console.log("Result is Zero")
        break;
     case 1:
        console.log("Result is 1")
        break;
     case 3:
        console.log("Result is 3")
        break;
    case 5:
        console.log("Result is 5")
        break;
    default:
        console.log("Result something else")
}

