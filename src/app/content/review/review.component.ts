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
      name: 'Name',
      project: 'Project A',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    },
    {
      name: 'Name',
      project: 'Project B',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    },
    {
      name: 'Name',
      project: 'Project C',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    }
  ];
}
