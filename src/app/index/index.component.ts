import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  cardForm = new FormGroup({
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(5),
      // Validators.pattern(/\s/)
    ]),
    email: new FormControl('',[
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ])
   })


  onSubmit() {
    console.log('Form was submitted');
    console.log(this.cardForm.value)
  }

 constructor(){
  console.log(this.cardForm.controls.name)
 } 

}
