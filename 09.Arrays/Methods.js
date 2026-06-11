/* Array Methods
   1.toString() :-
     - It is used to convert aray into string
     - Syntax:-
       arrayname.toString()
   2.join() :-
     - It is also convert the array into string but here we specify how the values can be seprated.
     - Syntax:-
       arrayname.join("*")
 -----------------------------------------------------------------------------------------------------------
    3.pop() :-
      - It is used to remove last element from an array
      - It returns the removed element
      - arrayname.pop()
    4.push() :-
      - It is used to add last element in the array.
      - It adds element and return length
      - arrayname.push(ele-1,...,ele-N)
 --------------------------------------------------------------------------------------------------------------
   5.shift() :-
     - It is used to remove first element in a array.
     - It returns removed element
     - Syntax:-
       arayname.shift();
   6.unshift() :-
     - It is used to add first element in a array.
     - It will add element and returns length
     - Syntax:-
       arrayname.unshift(ele-1,.....,ele-N);
 ------------------------------------------------------------------------
   7.Delete :-
     - It is used to remove an element from an array based on specified index.
     - The element space will remain constant where element deleted based on index.
     - syntax:-
       delete arrayname[index]
   8.concat() :-
     - It is used to join/merge more than one array.
     - Syntax:-
       array1.concat(array2);
   9.splice() :-
     - It returns a portion of array based on index value.
     - Syntax:-
       arrayname.splice(1) --> Starting upto end
       arrayname.splice(1,3) --> starting upto last specified index
   10.sort() :-
      - It is used to sort the elements based on numbers/alphabetical order.
      - Syntax:-
        arrayname.sort();
    11.reverse() :-
       - It is used to reverse the elements in an array.
       - It will change the orginal array.
       - Syntax:-
         arrayname.reverse();



*/

let fruits = ["Banana","Orange","Apple","Mango"]

// 1. toString() --> It is used to convert array into string
console.log(fruits.toString())

// 2.join() --> It is also convert the array into string but here we specify how the values can be seprated.
console.log(fruits.join('|'))

// 3.pop() --> It is used to remove last element from array
console.log("Removed Element:-",fruits.pop())
console.log("After pop():-",fruits)

// 4.push() --> It is used to add a new element into an array at end
console.log(fruits.push("Pineapple")); // add & length
console.log("After Push():-",fruits)

// 5.shift() --> It is used to remove first element in a array
console.log("Removed Element:-",fruits.shift()); // Banana
console.log("After shift()",fruits)

// 6.unshift() --> It is used to add first element in a array
console.log(fruits.unshift("Lemon")); // add & return length
console.log("After unshift():-",fruits)

// Delete --> It is used to delete element from an array based on index value
delete fruits[1];
console.log(fruits);
console.log(delete[1]);

// 8.concat() --> It is used to join/merge 2/more arrays
let arr1 = [10,20];
let arr2 = ["A","B","C"];
console.log("After concat():-",arr1.concat(arr2));
let arr3 = [true,false];
console.log(arr1.concat(arr2,arr3))

// 9.slice() :-
 fruits = ["Banana","Orange","Apple","Mango"]
 console.log(fruits.slice(2)) // [ 'Apple', 'Mango' ]
console.log(fruits.splice(1,3)) //[ 'Orange', 'Apple', 'Mango' ]

// 10.sort() :- It is used to sort the elements based on numbers/alphabetical order.
fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.sort()) // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

let nums = [1,5,0,3,4]
console.log(nums.sort())  // [ 0, 1, 3, 4, 5 ]


// 11.reverse()
fruits = ["Banana","Orange","Apple","Mango"]
console.log("Before reverse:-",fruits)
fruits.reverse()
console.log("After reverse:-",fruits)
