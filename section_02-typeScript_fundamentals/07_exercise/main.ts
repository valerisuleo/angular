import { Like } from './like';

let clickMe = new Like(true, 200);
clickMe.onClick();

console.log(clickMe.displayResults());
