import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})

export class MeComponent {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  

  switchLang(lang: string) {
    this.translate.use(lang);
    console.log('TEST:', this.translate.instant('menu.skills'));
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
