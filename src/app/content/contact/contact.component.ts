import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;


  /**
   * Constructor
   * @param {FormBuilder} fb - The form builder used to create the contact form.
   */
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }


  /**
   * Handles the submission of the contact form.
   * If the form is valid, logs the submitted data to the console,
   * displays an alert to the user, and resets the form.
   * If the form is invalid, marks all form controls as touched.
   */
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }


  /**
   * Scroll to the given element with the given id.
   * @param {string} sectionId - The id of the element to scroll to.
   */
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
