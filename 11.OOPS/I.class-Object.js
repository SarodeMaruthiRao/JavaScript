/* Class & Object
   - A class is a logical entity which contins variables and methods.
   - Object is a physical entity & an instance of class.
   - Methoda contains statements.Sometimes methods can accept arguments.
   - Class also contains constructor
   - Constructor will be called when you create object for class.
      logical - cannot occupy memory
      physical - can occupy memory
   - this keyword represent the class variables
   - Every object is independent even though they dervived from class

*/
class Student {

    constructor(sid,sname,grade)
    {
        this.sid = sid;
        this.sname = sname;
        this.grade = grade
    }
    display()
    {
        console.log(this.sid,this.sname,this.grade)
    }
}
let stu = new Student(101,"john","A")
stu.display()

let stu1 = new Student(102,"Ram","A")
stu1.display()

let stu2 = new Student(103,"Kiran","A")
stu2.display()


