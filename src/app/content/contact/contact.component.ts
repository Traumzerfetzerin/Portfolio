import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule, HttpClientModule, LanguageSwitcherComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;


  /**
   * Constructor for the ContactComponent.
   * Sets the default language for the TranslateService to 'de' and uses it.
   * Creates a form group for the contact form with the following fields:
   *   name: required string
   *   email: required string with the email pattern
   *   message: required string
   *   acceptPolicy: required boolean that must be true
   * @param {Router} router - The Angular Router for navigating to different routes.
   * @param {FormBuilder} fb - The FormBuilder for creating form groups and form controls.
   * @param {HttpClient} http - The HttpClient for making HTTP requests.
   */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient

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
   * Submits the contact form and sends a POST request to the given API endpoint.
   * If the form is invalid, marks all form controls as touched and returns.
   * If the request is successful, displays an alert with a success message and resets the form.
   * If the request fails, displays an alert with an error message.
   */
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.http.post('https://your-api.com/contact', this.contactForm.value)
      .subscribe({


        /**
         * Success callback for the HTTP POST request.
         * Displays an alert with a success message and resets the contact form.
         */
        next: () => {
          alert('Nachricht erfolgreich gesendet!');
          this.contactForm.reset();
        },


        /**
         * Error callback for the HTTP POST request.
         * Logs the error to the console and displays an alert with an error message.
         * @param {any} err - The error object from the failed request.
         */
        error: (err) => {
          console.error(err);
          alert('Fehler beim Senden der Nachricht');
        }
      });
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
