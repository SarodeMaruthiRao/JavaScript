/* Static
   - In JavaScript, the static keyword is used to define
     methods or properties that belong to the class itself 
     rather than to its instances (objects created from the class). 
   - For saving memory we use static keyword.
 */
class Test 
{
    static a = 10;
    b = 20;

    static m1 ()
    {
        console.log("This is m1 static method")
    }
    m2()
    {
        console.log("This is m2non-static method")
    }
}

// 1.using class name static vairables and methods acessed
console.log(Test.a) // 10
// console.log(Test.b) // undefined

Test.m1(); // This is m1 static method
// Test.m2(); // error,incorrect


// 2. we can acess non-static vairbales & methods using object
let t = new Test();
console.log(t.b);
t.m2();

// Updating static method
Test.a = 1000;
console.log("After updated a value:-",Test.a)