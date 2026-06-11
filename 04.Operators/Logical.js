

/* Logical Operators 
   - It is used perform operation between boolean vairables
   - It is returns true or false value
   - List Logical Operators
     1.Logical AND (&&)
     2.Logical OR (||)
     3.Logical NOT (!)

        b1   |   b1    |  AND   |    OR    |  NOT(b1)
      ------------------------------------------------
      true   | true   |  true   |   true  |   false
      true   | false  |  false  |   true  |
      false  | true   |  false  |   true  |   true
      false  | false  |  false  |   false   |
    - we can also use mix of logical and realtional operators
*/

let b12 = true
let b21 = false
console.log("------Logical Operators------")
console.log("b1 && b2:-",b12&&b21);
console.log("b1 || b2:-",b12||b21);
console.log("!b2:-",!b21);
console.log(20>30 && 10>5) //true
console.log(10<20 || 5>10) //true
