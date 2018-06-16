let drawpoint = (x, y) => {
  // ...
}
// This is not too bad but we may have more argumentes to passo into and it can becaome very long


// what we wanna do it's to pass an object as argument
let drawpoint = (point) => {
  // ...
}

drawpoint({
  x: 1,
  y: 2
})

// however there is a problem with this implementation. In fact I can pass a name property
drawpoint({
  name: 'Mike'
})





// We have 2 solutions to solve this problem
  // 1. INLINE ANNOTATION. Usually works fine for small stuff but it's very verbose
  let drawpoint = (point: { x:number, y: number }) => {
    // ...
  }

  // 2. INTERFACE
    interface Point {
      x: number,
      y: number
    }

    let drawpoint = (point: Point) => {
      // ...
    }
