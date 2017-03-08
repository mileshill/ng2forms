import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public user: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.user = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this._fb.group({
        email: ['', [Validators.required]],
        confirm: ['', [Validators.required]]
      })
    });
  }

  onSubmit(){
    console.log(this.user.value, this.user.valid);
  }
}
