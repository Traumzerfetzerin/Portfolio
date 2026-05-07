import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;


  /**
   * Initializes the contact form with validation rules.
   */
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}')
        ]
      ],
      message: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }


  /**
   * Sends the contact form via EmailJS.
   */
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const form = this.contactForm.value;

    emailjs.send(
      'service_pt14vou',
      'template_0s1qe7r',
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      'mb7tyX9XDp8u4Ht0l'
    )
      .then(() => {
        alert('Nachricht erfolgreich gesendet!');
        this.contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('Fehler beim Senden der Nachricht');
      });
  }


  /**
   * Scrolls smoothly to a section by ID.
   */
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}