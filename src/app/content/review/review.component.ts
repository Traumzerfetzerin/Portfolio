import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})


export class ReviewComponent {
  /**
   * Constructor for the ReviewComponent.
   * Sets the default language for the TranslateService to 'de' and uses it.
   * @param {Router} router - The Angular Router for navigating to different routes.
   * @param {TranslateService} translate - The TranslateService for translating text.
   */
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }


  /**
   * Switches the language of the application to the given language.
   * @param {string} lang - The language to switch to.
   * @example
   * switchLang('en')
   */
  switchLang(lang: string) {
    this.translate.use(lang);
  }


  reviews = [
    {
      name: 'reviewsText.0.name',
      project: 'reviewsText.0.project',
      text: 'reviewsText.0.text',
      linkedin: '#'
    },
    {
      name: 'reviewsText.1.name',
      project: 'reviewsText.1.project',
      text: 'reviewsText.1.text',
      linkedin: '#'
    },
    {
      name: 'reviewsText.2.name',
      project: 'reviewsText.2.project',
      text: 'reviewsText.2.text',
      linkedin: '#'
    }
  ];
}
