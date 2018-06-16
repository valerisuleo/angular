// ______________________________Type assertions______________________________
// // If we do
//   let message = 'abc';
//   let endsWithC = message.endsWith('c');
// // we got an error because we need to tell explicetly that let message is a string
//
//
//
// so if we type:
// let message; // in this way mesage it could be anything
// message = 'abc';
// let endsWithC = message.endsWith('c'); // this method return a boolean
// console.log(endsWithC);
// However we can do better: we can do type assertions:
var message; // in this way mesage it could be anything
message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// console.log(endsWithC);
// or...
var endsWithC = message.endsWith('c');
console.log(endsWithC);
