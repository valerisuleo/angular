import { Component, OnInit } from '@angular/core';
//
import { passObjToFavouriteChanged } from '../favourite/favourite.component';



// It's better to put put our interface in the FavouriteComponent
// interface passObjToFavouriteChanged {
//   newValue: boolean;
// }

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  post = {
    title: 'title',
    isFavourite: true
  }

// we pass the obj...
  onFavouriteChanged(passTheObj: passObjToFavouriteChanged) {
    console.log('Am I changed? :', passTheObj)
  }


  // onFavouriteChanged(isFavourite) {
  //   console.log('Am I changed? :', isFavourite)
  // }

  constructor() { }

  ngOnInit() {
  }
}
