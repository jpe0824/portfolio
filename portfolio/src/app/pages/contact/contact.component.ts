import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('');

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  submitForm() {}
}
