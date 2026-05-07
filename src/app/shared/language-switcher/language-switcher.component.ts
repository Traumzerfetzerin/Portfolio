import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})


export class LanguageSwitcherComponent {
  currentLang: string = 'de';


  /**
   * Initializes the current application language.
   */
  constructor(private translate: TranslateService) {

    const savedLang = localStorage.getItem('lang') || 'de';

    this.currentLang = savedLang;
    this.translate.use(savedLang);
  }


  /**
   * Switches the application language.
   * @param lang Language code (e.g. 'de', 'en')
   */
  switchLang(lang: string) {
    this.currentLang = lang;

    this.translate.use(lang);

    localStorage.setItem('lang', lang);
  }
}