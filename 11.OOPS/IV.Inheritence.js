/* Inheritence
   - It is a process in which aa child class is dervived from parent class.
   - A class can reuse the properties and methods of another class.
   - Inheritence allows you to reuse the functionality of an exisitng class without reqriting it.
   - Types of Inheritence
     1.Single
     2.MultiLevel
     3.Hierachial --> Parent can dervivie one or more childs

   Method Overiding in inheritence
   - A child class redefine the method present in parent class.
   - The method must have same name,return type,parameters
   - when we want to reimplement the methods defined in oneclass to another class.
*/
class A {

    a = 100;
    display()
    {
        console.log(this.a);
    }

}
class B extends A{

    b = 200;
    show()
    {
        console.log(this.b);
    }
}

let oB = new B();
oB.display(); // Class A
oB.show(); // Class B


// Method Overriding - Hiearchial Inheritence
class Bank{
    
    Roi()
    {
        return 0;
    }
}
class Axis extends Bank{

    Roi()
    {
       return 10.5;
    }

}
class SBI extends Bank{

    Roi()
    {
       return 12.5;
    }

}
let sbi = new SBI();
console.log("Rate of interest of SBI:-",sbi.Roi())

let axis = new Axis();
console.log("Rate of interest of AXIS:-",axis.Roi())

// Super --> It is used to call the parent class constructor
class Animal 
{
    constructor(color)
    {
        this.color = color;
    }

    printColor()
    {
        console.log("Color:-",this.color)
    }
}

class Dog extends Animal{

    constructor(color,food)
    {
        super(color)
        this.food = food
    }
    eating()
    {
        console.log("Dog Eating:-",this.food)
    }
    display()
    {
        this.printColor();
        this.eating();
    }
}
let dog = new Dog("Black","Bread");
dog.display()