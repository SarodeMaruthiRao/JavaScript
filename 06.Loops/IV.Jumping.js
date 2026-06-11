/* Break
    - The break statement stops the loop immediately when a condition is met
*/

// Example
for(let i=0;i<=10;i++){
    if(i==5){
        break;  // exit from entire block
    }
    console.log(i)
}

/* Continue
    - The continue statement skips the current iteration and moves to the next one.
*/
for(let i=0;i<=10;i++){
    if(i==3 || i==5 || i==7){
        continue;  // skip if number = 3,5,7
    }
    console.log(i)
}