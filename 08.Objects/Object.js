/* Objects
   - Everything exsiting in the world considered as a object
   - It is collection of properties and Methods.


*/

// Example - 1
let person = {

    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60

}

// Acessing Object properties
console.log("----Details----");
console.log("First Name:-",person.firstname);
console.log("Last Name:-",person.lastname);
console.log("Age:-",person.age);
console.log("Weight:-",person.weight)

// update existing property
person.weight = 50.6;
console.log("Updated Weight:-",person.weight)

// Addcproperty into object
person["height"] = 5.5

// Remove property from object
delete person.age;
console.log("Age:-",person.age)


// For-in Loop
console.log("-----Looping objects----")
for(let x in person)
{
    // console.log(x) // property names
    // console.log(person[x]) // values of object
    console.log(x+":-"+person[x])
}