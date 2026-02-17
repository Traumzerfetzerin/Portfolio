import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {
  activeSection: string = '';
  sections: string[] = ['whyMe', 'skills', 'projects', 'contact'];

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  /**
   * Sets the active section to the section that is currently visible on the screen.
   * The section is determined by the scroll position of the window.
   * If the scroll position is within the bounds of a section, that section is considered active.
   * The active section is updated every time the window is scrolled.
   * @returns {void}
   */

  onWindowScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (let sectionId of this.sections) {
      const el = document.getElementById(sectionId);
      if (!el) continue;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        this.activeSection = sectionId;
      }
    }
  }


  /**
   * Scroll to the given element with the given id.
   * @param {string} sectionId - The id of the element to scroll to.
   */
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }
}
