// We get this specific scenario only when we set the constructor on PRIVATE!!!!
class Monkey {
    // constructor(public name?: string, public age?: string){
    // }
    // 1. if we set our constructor to private
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.foodEaten = [];
    }
    eatSomething(food) {
        this.foodEaten.push(food);
    }
    introduce() {
        return `My name is ${this._name}, I am a ${this._age} years old and I just ate an ${this.foodEaten}`;
    }
    // 3. so we can access to the properties onfly inside the object
    // so we can add a method:
    // getProperties(){
    //   return this.age;
    // }
    // 6
    get properties() {
        return this._age;
    }
    // 5. let's set a rule for our Monkey's properties
    // setProperties(value){
    //   if (value < 1) {
    //     throw new Error('value cannot be less than 1');
    //
    //   }
    //   this.age = value;
    // }
    // 7
    set properties(value) {
        if (value < 1) {
            throw new Error('value cannot be less than 1');
        }
        this._age = value;
    }
}
// the cookie and the cookie-cutter
let apeKird = new Monkey('Amanda', 15);
apeKird.eatSomething('apple');
// 2. we cant now access to our object's properties...
// console.log(apeKird.name);
// 4. now we can access to the object's properties
// apeKird.getProperties();
// apeKird.setProperties(10);
// 8
apeKird.properties = 10;
console.log(apeKird.introduce());
// class Point {
//   constructor(private x?: number, private y?:number) {
//   }
//
//   draw(){
//     console.log(`My cordinations are: ${this.x} and ${this.y}`)
//   }
//
//   get X(){
//     return this.x;
//   }
//
//   set X(value){
//     if (value < 0 ) {
//         throw new Error('wow')
//
//     }
//     this.x = value;
//   }
//
// }
//
//  let point = new Point(1,2);
//  let x = point.X;
//  point.X = 12;
//  point.draw();
