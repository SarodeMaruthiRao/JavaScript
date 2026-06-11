/* Vairables
   - It is a container used to store a value
   - Basicly vairables can be declared in 3 ways
     1.var
     2.let
     3.const
   - Vairable Rules
     1.Vairable names are case sensitive; “a” & “A” is different.
     2.Only letters, digits, underscore and $ is allowed (space not allowed).
     3.Only a letter, underscore or $ should be 1st character.
     4.Reserved words cannot be variable names.


*/

/* 1.Var
     - It is a global scope variable.
     - It can be Updated
       Example:- var a =10
                  a = "Maruthi"
     - It can be Redeclared
       Example:- var x = 10
                 var x = "john"
     - Syntax:-
       var variable_name = value;

*/

var a = 10;
console.log("The value of a is:-", a);
a = "Maruthi";
console.log("The reassigned value is :", a);

/* 2.let
     - It is a local scope vairable.
     - It can be Updated
       Example:- let x = "ab"
                  x = true
     - It cannot be Redeclared
       Example:- let a = 23
                 let a = "Maruthi"
     - Syntax:-
       let variable_name = value;

*/
let x = true;
console.log("The value of x is :-", x);
// let x = "Maruthi" -->  redeclaration not allowed
console.log(x)

/* 3.Const
     - It is a local scope vairable.
     - Once the const value is assigned it can’t be changed.
     - It can’t be reassigned.
     - Syntax:- 
        const variable_name = value;

*/
const pi = 3.14;
console.log("The value of pi:-",pi)
//  p = 4; --> Assignment to constant vairable
