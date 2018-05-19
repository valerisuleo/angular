export class Like {

  constructor(private _isSelected?: boolean, private _isIncreased?: number){

  }


  onClick(){
    if (this._isSelected ) {
        this._isSelected = true
        this._isIncreased++
    }
  }
  // onClick(){
  //   if (this.isSelected === true) {
  //       this.isIncreased++
  //   }
  // }

  get isSelected(){
    return this._isSelected;
}

  get isIncreased(){
    return this._isIncreased;
}

  displayResults(){
    return `${this.isSelected} and ${this.isIncreased}`
  }

}
