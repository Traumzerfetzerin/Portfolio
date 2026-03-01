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
   * Submit the contact form
   * If the form is invalid, mark all form controls as touched
   * If the form is valid, create a mailto link with the form values and open it in a new window
   * Reset the contact form after submitting
   */
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const email = 'nadjaparadiesvogel@gmail.com';
    const subject = encodeURIComponent('Contact Form Message');
    const body = encodeURIComponent(
      `Name: ${this.contactForm.value.name}\n
      Email: ${this.contactForm.value.email}\n
      Message: ${this.contactForm.value.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    this.contactForm.reset();
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
