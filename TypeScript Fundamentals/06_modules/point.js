"use strict";
exports.__esModule = true;
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
exports.Monkey = Monkey;
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
exports.Point = Point;
