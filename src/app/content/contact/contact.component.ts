import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
   * Creates the contact form and injects the required Angular services.
   *
   * The form contains the following fields:
   * - `name`: Required text field for the sender's name.
   * - `email`: Required field with email and pattern validation.
   * - `message`: Required textarea for the message content.
   * - `acceptPolicy`: Required checkbox that must be checked.
   *
   * @param {Router} router - Angular router used for navigation.
   * @param {FormBuilder} fb - Service for creating reactive form groups and controls.
   * @param {TranslateService} translate - Service for accessing the current application language.
   */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}'
          )
        ]
      ],
      message: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }


  /**
   * Sends the contact form via EmailJS.
   * Supports German and English for both:
   * - the notification email to you
   * - the automatic reply to the sender
   */
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const form = this.contactForm.value;
    const currentLang = this.translate.currentLang || 'de';

    emailjs
      .send(
        'service_pt14vou',
        'template_0s1qe7r',
        {
          // Form values
          name: form.name,
          email: form.email,
          message: form.message,
          lang: currentLang,

          // Subject of the email you receive
          subject:
            currentLang === 'de'
              ? 'Neue Kontaktanfrage'
              : 'New Contact Request',

          // Subject of the automatic reply to the sender
          autoReplySubject:
            currentLang === 'de'
              ? 'Ich habe deine Nachricht erhalten'
              : 'I have received your message',

          // Content of the automatic reply
          autoReplyMessage:
            currentLang === 'de'
              ? `Hallo ${form.name},

vielen Dank für deine Nachricht!

Ich werde mich so schnell wie möglich bei dir melden.

Liebe Grüße
Nadja Petruck`
              : `Hi ${form.name},

Thank you for reaching out!

I'll get back to you as soon as possible.

Best regards,
Nadja Petruck`
        },
        'mb7tyX9XDp8u4Ht0l'
      )
      .then(() => {
        alert(
          currentLang === 'de'
            ? 'Nachricht erfolgreich gesendet!'
            : 'Message sent successfully!'
        );

        this.contactForm.reset({
          name: '',
          email: '',
          message: '',
          acceptPolicy: false
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);

        alert(
          currentLang === 'de'
            ? 'Fehler beim Senden der Nachricht.'
            : 'Error sending message.'
        );
      });
  }


  /**
   * Scrolls smoothly to a section by ID.
   */
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}