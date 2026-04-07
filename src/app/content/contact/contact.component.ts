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


  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.http.post('https://your-api.com/contact', this.contactForm.value)
      .subscribe({
        next: () => {
          alert('Nachricht erfolgreich gesendet!');
          this.contactForm.reset();
        },
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
