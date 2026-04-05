import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {
  activeSection: string = '';
  sections: string[] = ['whyMe', 'skills', 'projects', 'contact'];


  /**
   * Constructor for the MenuComponent.
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


  /**
   * Scrolls to the given section with the given id.
   * If the router's current url is not '/', it will first navigate to '/' and then scroll to the element.
   * @param {string} sectionId - The id of the element to scroll to.
   */
  scrollTo(sectionId: string) {

    if (this.router.url !== '/') {

      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      });

    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.activeSection = sectionId;
  }
}
