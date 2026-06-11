/* Encapsulation
   - It is defined as the wrapping of data & function under a single unit.
   - It is the mechanism that binds together code and the data.
   - The javascript encapsulation is a process of binding the data (i.e.vairables) with the functions 
     acting on data

*/

class student{
    
    constructor()
    {
      let name;
      let marks;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }

    getMarks()
    {
        return this.marks;
    }

    setMarks(marks)
    {
        this.marks = marks;
    }

}

let stu = new student()
stu.setName("Rakesh");
stu.setMarks(80);

console.log(stu.getName());
console.log(stu.getMarks());