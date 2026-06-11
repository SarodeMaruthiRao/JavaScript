/* 2.String
     - It is collections of characters closed between quotations.
     - Types of quotations:-
       1.Single Quotation --> ('')
       2.Double Quotation --> (" ")

*/

/* String Methods 
   1.charAt():-
     - it is used to to return character in a string based on index value.
     - Syntax:-
       stringName.charAt(indexvalue);
   2.concat():-
     - It usd to concat the string to existing string.
     - Syntax:-
       stringName.concat('string');
   3.replace():-
     - It is used to replace exisiting string using new string.
     - syntax:-
       stringName.replace("string")
   4.substring():-
     - It is used to extract a portion of string in from existing string.
     - Syntax:-
       stringName.substring(startindex,endindex);
   5.toLowerCase():-
     - It is used to convert string into lowercase.
     - Syntax:-
       stringName.toLowerCase();
   6.toUpperCase():-
     - It is used to convert string into uppercase.
     - Syntax:-
       stringName.toUpperCase();
   7.split():-
     - It is used to divide the string into different parts
     - Syntax:-
       stringName.split('')
   8.trim():-
     - It is used to remove the spaces present in the string
     - Syntax:-
       stringName.trim()

*/
let s = "Welcome"

// !.charAt() --> it is used to to return character in a string based on index value.
console.log(s.charAt(2))

// 2.concat() --> It usd to concat the string to existing string
console.log(s.concat(" to javascript programming"));

// 3.replace() --> It is used to replace exisiting string using new string.
s = "Welcome to javascript";
console.log("Replaced String:-",s.replace("javascript","java"))

// 4.substring() --> It is used to extract a portion of string in from exisiting string.
s = "Welcome"
console.log("Substring:-",s.substring(0,3)) // wel

// 5.toLowerCase() --> It is used to convert string into lowercase
console.log("LowerCase:-",s.toLowerCase());

// 6.toUpperCase() --> It is used to convert string into uppercase
console.log("UpperCase:-",s.toUpperCase())

// 7.split() --> It is used to divide the string into different parts
s = "Welcome to java";
console.log("Original String:-",s)
let arr = s.split(' ')
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// 8.trim() --> It is used to remove the spaces present in the string
s = "  welcome"
console.log(s);
console.log(s.trim())
