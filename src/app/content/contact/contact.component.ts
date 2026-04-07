import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  contactForm: FormGroup;


  /**
   * Constructor for the ContactComponent.
   * Sets the default language for the TranslateService to 'de' and uses it.
   * Creates a form group for the contact form with the given fields and validators.
   * @param {Router} router - The Angular Router for navigating to different routes.
   * @param {TranslateService} translate - The TranslateService for translating text.
   * @param {FormBuilder} fb - The FormBuilder for creating form groups.
   */
  constructor(
    private router: Router,
    private translate: TranslateService,
    private fb: FormBuilder
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
      `Name: ${this.contactForm.value.name}
      Email: ${this.contactForm.value.email}
      Message: ${this.contactForm.value.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    this.contactForm.reset();
    console.log(decodeURIComponent(body));
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
