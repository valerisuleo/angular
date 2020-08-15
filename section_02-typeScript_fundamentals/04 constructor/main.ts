// refactoring
class Monkey {
  foodEaten: string[] = []

  // the question mark makes the argument optional.

  constructor(public name?: string, public species?: string){
  }

  eatSomething(food){
    this.foodEaten.push(food);
  }

  introduce(){
    return `My name is ${this.name}, I am a ${this.species} and I just ate an ${this.foodEaten}`;
  }
}

// the cookie and the cookie-cutter
 let apeKird = new Monkey('Amanda', 'gorilla');
 let forzaDellaNatura = new Monkey('James', 'orango');
 apeKird.eatSomething('apple');

 console.log(forzaDellaNatura.introduce())
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





class Point {
  constructor(private x?: number, private y?:number) {
  }

  draw(){
    console.log(`My cordinations are: ${this.x} and ${this.y}`)
  }

}

 let point = new Point(1,2);
 point.draw();
