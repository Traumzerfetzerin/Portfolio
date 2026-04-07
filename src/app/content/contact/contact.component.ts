import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;


  /**
   * Constructor for the ContactComponent.
   * Sets the default language for the TranslateService to 'de' and uses it.
   * Creates a form group for the contact form with validators for the name, email, message and accept policy fields.
   * @param {Router} router - The Angular Router for navigating to different routes.
   * @param {TranslateService} translate - The TranslateService for translating text.
   * @param {Builder} fb - The FormBuilder for creating form groups and form controls.
   * @param {HttpClient} http - The HttpClient for sending HTTP requests.
   */
  constructor(
    private router: Router,
    private translate: TranslateService,
    private fb: FormBuilder,
    private http: HttpClient

  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }


  /**
   * Switches the language of the application to the given language.
   * @param {string} lang - The language to switch to.
   */
  switchLang(lang: string) {
    this.translate.use(lang);
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
