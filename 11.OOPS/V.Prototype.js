/* Prototype
   - It is an object that is associated with every function & Object by default.
   - If we want to add new properties at later stage to a function/class,we can take
     the help of prototype 

*/

// Example - 1 --> Using function
function student ()
{
    this.name = "John";
    this.gender = "Male";
}
student.prototype.age = 35; // Added age
let stu1 = new student();
console.log("----Student Details(1)----")
console.log("Name:-",stu1.name);
console.log("Gender:-",stu1.gender);
console.log("Age:-",stu1.age)


// Example - 2 --> Using class
class Empolyee
{
    constructor(eid,ename)
    {
        this.eid = eid;
        this.ename = ename;
    }
}
Empolyee.prototype.salary = 50000;



let emp1 = new Empolyee(101,"David")
console.log("----Employee Details(1)----")
console.log("Id:-",emp1.eid);
console.log("Name:-",emp1.ename);
console.log("Salary:-",emp1.salary)

let emp2 = new Empolyee(102,"John")
console.log("----Employee Details(2)----")
console.log("Id:-",emp2.eid);
console.log("Name:-",emp2.ename);
console.log("Salary:-",emp2.salary)

console.log("----Adding Function----")
Empolyee.prototype.display = function()
                            {
                                console.log(this.eid,this.ename,this.salary)
                            }   
emp1.display();
emp2.display();

