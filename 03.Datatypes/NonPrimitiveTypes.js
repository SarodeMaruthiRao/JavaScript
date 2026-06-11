/* Non-Primitive Datatypes
   - These are the datatypes that can defined by user.
   - Types of Non-Primitive Types
     1.Object
     2.Array
     3.Function
     4.Date

*/

/* 1.Object
     - It can be represented by curly braces.
     - Object properties are written as name: value pairs, separated by commas.
                           (or)
     - It is collection of properties and methods

*/
const Student = {
    name:"John",
    age:20,
    cgpa:8.3,
    isPass:true
};
console.log("----Student Details----")
console.log("Name:-",Student.name);
console.log("Age:-",Student.age);
console.log("Cgpa:-",Student.cgpa);
console.log("isPassed:-",Student.isPass);

/* 2.Array
     - It is used to store the different types of values.
     - It is represented using [] brackets.
     - Indexing starts from 0
*/

let numbers = [2,34,-1,-2]
console.log("Number Array:-",numbers)

// Indexing
console.log("-----Acessing using index----")
console.log("Value at index 0:-",numbers[0])
console.log("Value at index 1:-",numbers[1])
console.log("Value at index 2:-",numbers[2])
console.log("Value at index 3:-",numbers[3])


/* 3.Function
     - It is a block of code used to perform some operation
     - Syntax:-
       function function_name(parameters){
           //code
       }

*/
function greet(){
    console.log("Hello!Good Morning");
}
greet()

/* 4.Date
     - It is used to show current date and time
     - Syntax:-
       Date()

*/

// Creating a new Date object for the current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);


/* Date Methods 
   1.getDate() -->
   2.getMonth() -->


*/

// 1.getDate() --> It is used to extract the date
console.log("Today Date:-",currentDate.getDate())
console.log("Current Month:-",currentDate.getMonth());
console.log("Current Year:-",currentDate.getFullYear());
console.log("HOurs:-",currentDate.getHours())
console.log("Minutes:-",currentDate.getMinutes())
console.log("Seconds:-",currentDate.getSeconds())