import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {
  signUpForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {

    this.formLoad()

  }
  formLoad() {

    this.signUpForm = this.FormBuilder.group({
      name: ['', [Validators.required]],
      Mobile: [,[Validators.maxLength(10)]],
      pancard: ['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)]],
      email: [''],
      Passward: [''],
      Confirmpassword: ['']
    })

  }

  submit() {
    console.log(this.signUpForm.value);

  }
}
