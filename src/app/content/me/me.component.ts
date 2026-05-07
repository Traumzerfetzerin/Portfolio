import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';


@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TranslateModule, LanguageSwitcherComponent],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})


export class MeComponent {

  constructor(private router: Router) { }


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
