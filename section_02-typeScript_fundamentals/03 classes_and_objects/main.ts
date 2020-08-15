// interface Point {
//   x: number,
//   y: number,
//   draw:
// }
//
// let drawpoint = (point: Point) => {
//   // ...
// }
//
// drawpoint({
//   x: 1,
//   y: 2
// })


// We call Class: groups of varaibles (properties) and functions (methods) that are highly related.

class Point {
  x: number;
  y: number;

  draw(){
    console.log(`My cordinations are: ${this.x} and ${this.y}`)
  }

  getDistance(another: Point) {
    // ....
  }
}

// let point: Point;
// point.draw()

// if we run in the terminal: tsc main.ts && node main.js
  // it retunrs an error: Cannot read property 'draw' of undefined.



//This is happening because we need to allocate memory to our custom type object.
 //So we need to make an istance of the class (objects are instance of the class):
 // let point = new Point();
 // point.draw();



 // if we run now in the terminal: tsc main.ts && node main.js
   // it retunrs no errors: however our coordinate are still undefined undefined.
   let point = new Point();
   point.x = 1;
   point.y =2;
   point.draw();
