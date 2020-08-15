// refactoring
var Monkey = /** @class */ (function () {
    function Monkey(name, species) {
        this.name = name;
        this.species = species;
        this.foodEaten = [];
    }
    Monkey.prototype.eatSomething = function (food) {
        this.foodEaten.push(food);
    };
    Monkey.prototype.introduce = function () {
        return "My name is " + this.name + ", I am a " + this.species + " and I just ate an " + this.foodEaten;
    };
    return Monkey;
}());
// the cookie and the cookie-cutter
var apeKird = new Monkey('Amanda', 'gorilla');
var forzaDellaNatura = new Monkey('James', 'orango');
apeKird.eatSomething('apple');
console.log(apeKird.name);
console.log(forzaDellaNatura.introduce());
console.log(apeKird.introduce());
// class Monkey {
//   name: string;
//   species: string;
//   foodEaten: string[] = []
//
//   constructor(name?: string, species?: string){
//     this.name = name;
//     this.species = species;
//   }
//
//   eatSomething(food){
//     this.foodEaten.push(food);
//   }
//
//   introduce(){
//     return `My name is ${this.name}, I am a ${this.species} and I just ate an ${this.foodEaten}`;
//   }
// }
//
// // the cookie and the cookie-cutter
//  let apeKird = new Monkey('Amanda', 'gorilla');
//  let forzaDellaNatura = new Monkey('James', 'orango');
//  apeKird.eatSomething('apple');
//
//  console.log(forzaDellaNatura.introduce())
//  console.log(apeKird.introduce());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("My cordinations are: " + this.x + " and " + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
