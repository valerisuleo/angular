export class Monkey {
  foodEaten: string[] = []

  constructor(public name?: string, public species?: string){
  }

  eatSomething(food){
    this.foodEaten.push(food);
  }

  introduce(){
    return `My name is ${this.name}, I am a ${this.species} and I just ate an ${this.foodEaten}`;
  }
}




export class Point {
  constructor(private x?: number, private y?:number) {
  }

  draw(){
    console.log(`My cordinations are: ${this.x} and ${this.y}`)
  }

}
