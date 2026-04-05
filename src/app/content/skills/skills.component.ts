import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})


export class SkillsComponent {
  skills = [
    { img: 'assets/img/skills/Angular.png', name: 'Angular' },
    { img: 'assets/img/skills/TypeScript.png', name: 'TypeScript' },
    { img: 'assets/img/skills/Javascript.png', name: 'JavaScript' },
    { img: 'assets/img/skills/html.png', name: 'HTML' },
    { img: 'assets/img/skills/css.png', name: 'CSS' },
    { img: 'assets/img/skills/api.png', name: 'REST-API' },
    { img: 'assets/img/skills/Firebase.png', name: 'Firebase' },
    { img: 'assets/img/skills/git.png', name: 'Git' },
    { img: 'assets/img/skills/MaterialDesign.png', name: 'Material Design' },
    { img: 'assets/img/skills/Scrum.png', name: 'Scrum' }
  ];


  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }


  switchLang(lang: string) {
    this.translate.use(lang);
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
