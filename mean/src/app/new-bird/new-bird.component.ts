import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Http } from '@angular/http';


@Component({
  selector: 'newbird',
  templateUrl: './new-bird.component.html',
  styleUrls: ['./new-bird.component.scss']
})

export class NewBirdComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;


  private url = 'http://localhost:3000/api/birds'

  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      latinName: ['', Validators.required],
      family: ['', Validators.required],
      image: null
    });
  }

// Convert file to Base64
  onFileChange(e) {
    const vm = this;
    const fileReader = new FileReader();

    const file = (e.target.files || e.dataTransfer.files)[0];
    fileReader.readAsDataURL(file);

    fileReader.onload = function fileLoaded() {
      vm.form.get('image').setValue({
        base64: fileReader.result
      });
    }
  }

  // New Bird
  birdCreate() {
    const vm = this;
    const formModel = vm.form.value;

    vm.loading = true;

    vm.http.post(vm.url, formModel)
    .subscribe((response) => {
      formModel['id'] = response.json().id;
    });
    vm.loading = false;
  }

  clearFile() {
    const vm = this;

    vm.form.get('image').setValue(null);
    vm.fileInput.nativeElement.value = '';
  }

  ngOnInit() {

  }

}




// export class NewBirdComponent implements OnInit {
//
//   newBird = {};
//   private url = 'http://localhost:3000/api/birds'
//
//   constructor(private http: Http) {
//   }
//
//   // New Bird
//   birdCreate() {
//     const vm = this;
//
//     vm.http.post(vm.url, vm.newBird)
//     .subscribe((response) => {
//       vm.newBird['id'] = response.json().id;
//     });
//   }
//
//
//   ngOnInit() {
//
//   }
//
// }
