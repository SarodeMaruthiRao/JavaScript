
/* 3.Nested if-else Statement
    - This is used when multiple conditions need to be checked sequentially.
    - The first true condition is executed, and the rest are skipped.
    - Syntax:
        if (condition1) 
        {
             // Code for condition1
        } 
        else if (condition2) 
        {
             // Code for condition2
        } 
        else if (condition3) 
        {
             // Code for condition3
        } 
        else 
        {
              // Code to execute if none of the conditions are true
        }
    -Example:-
       marks >=90  A
       marks >=75  B
       marks >=60  C
*/

let marks = 10
if (marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=75 && marks<=90){
    console.log("Grade B");
}
else if (marks>=60 && marks<=75){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}


// Example - 2

let browser = 'Edge';
if (browser === "Chrome"){
   console.log("Browser is chrome")
}
else if(browser === "Firefox"){
    console.log("Browser is Firefox");
}
else if(browser === "Edge"){
    console.log("Browser is Edge")
}
else {
    console.log("Other Browsers")
}