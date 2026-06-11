/* Datatypes
   - It specify that type of data that a vairable can store.
   - Types of Datatypes:-
     1.Primitive Type 
     2.Non-Primitive Type

    1.Primitive DataTypes:-
      - These are the datatypes that can be defined already in the Program.
      - Types of Primitive Types
        1. Integer
        2. String
        3. Boolean
        4. Undefined
        5. Null
        6. Bigint
        7. Symbol

*/

/* 1.Integer
     - It is used to store different types of values
       1.Numerical values
       2.Floating point values
       3.Expotential values
*/

// Number
let x = 12;
console.log("The value of x:-",x)
console.log("The type of x:-",typeof x)
// Floating point
let y = 23.2
console.log("The floatingpoint value:-",y)
// Expotential Value
let z = 123e-5
console.log("The Expotential value is -",z)

/* 2.String
     - It is collections of characters closed between quotations.
     - Types of quotations:-
       1.Single Quotation --> ('')
       2.Double Quotation --> (" ")

*/

let Name = "Sri Ram"
console.log("The Name:-",Name);
console.log("The type of Name:-",typeof(Name))

/* 3.Boolean
     - It can hold only two values
       1.true
       2.false
*/

let isFollow = true;
console.log("isFollowed:-",isFollow)
console.log("The type of isFollow:-",typeof(isFollow))

/* 4.Undefined
    - By defalut the value of vairable is undefined.
    - It is used where value of variables if undefined

*/

let car;
console.log("The is car is defined:-",car)
console.log("The type of car:-",typeof(car))

/* 5.Null
     - It is used when intially we dont known the value of the vairable.
     - After in future we can assign a value to the vairable
*/
let Assigned_Date = null;
console.log("Is Date is assigned:-",Assigned_Date)
Assigned_Date = "10-02-2005";
console.log("Assigned date is :-",Assigned_Date)

/* 6.BigInt
     - It is used to store huge amount value in a vairable
     - Syntax:-
       Bigint(value) 
*/
let x1 = BigInt (1234566775446)
console.log("The value of x:-",x1)
console.log("The type of x:-",typeof(x1))

/* 7.Symbol
     - It is used to unique and unchangeable indentifier
     - Syntax:-
       Symbol("value")

*/
let mysymbol = Symbol("John");
console.log("MySymbol:-",mysymbol)
console.log("Type of mysymbol:-",typeof(mysymbol))