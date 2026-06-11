/* Polymorphism
   - It is the ability to create a vairable,function or object that has more
     than one form.
   - It is greek word.
   - Poly --> Many  ; Morph --> Many forms
   - Polymorphisk = Many forms

*/

class Shape
{
     draw()
     {
        return "I am generic shape";
     }
}
class Square extends Shape
{
    
     draw()
     {
        return "I am Square"
     }

}
class Circle extends Shape
{
    
     draw()
     {
        return "I am Circle"
     }

}

let s = new Shape();
console.log(s.draw())

let c = new Circle();
console.log(c.draw());

let sq = new Square();
console.log(sq.draw());