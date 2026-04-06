import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-police',
  standalone: true,
  imports: [MenuComponent, TranslateModule],
  templateUrl: './police.component.html',
  styleUrl: './police.component.scss'
})


export class PoliceComponent {
/**
 * Constructor for the PoliceComponent.
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
 */
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
