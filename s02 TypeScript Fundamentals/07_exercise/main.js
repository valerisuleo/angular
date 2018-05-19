"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var clickMe = new like_1.Like(true, 200);
clickMe.onClick();
console.log(clickMe.displayResults());
