/* Arrays
   - It is used to store multiple values in a single vairable.
   - An array is special vairbale, which can hold more than one value at a time.
   - It is represented using [] brackets.
   - Indexing starts from 0.
   - Example:-
     let cars = ["Saab","Volvo","BMW"]
                 (or)
     let cars = new Array("Saab","Volvo","BMW")
*/

let cars = ["Saab","volvo","BMw"];
console.log(cars)

// Acessing values using index
console.log("----Acessing using index----")
console.log("Value at index 0:-",cars[0]);
console.log("Value at index 1:-",cars[1]);
console.log("Value at index 2:-",cars[2]);

// Change the value in existing array
cars[0] = "Benz";
console.log("Changed array:-",cars)

// Array with differnt type of data
let myarray = [100,"Welcome",10.15,true]
console.log(myarray)


// We can have objects in array
console.log("----Objects in Array---")
let person1 = {
    name:"John",
    age:30,

};
let person2 = {
    name:"David",
    age:40
}
let myarray1 = [person1,person2];
console.log(myarray1)
console.log("Object 1:-",myarray1[0])  // { name: 'John', age: 30 }
console.log("Object 2:-",myarray1[1])  // { name: 'David', age: 40 }

// Length of an array
let fruits = ["Banana","Orange","Apple","Mango"]
console.log("Lenght:-",fruits.length)  // 4

// Looping elements from array
console.log("----Using For Loop----")
for(let i=0;i<=3;i++)
{
    console.log(fruits[i]);
}

// Looping elements using For-of loop
console.log("----Usign for-of Loop")
for (let ele of fruits)
{
    console.log(ele)
}