import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})


export class HeroComponent {
  activeSection: string = '';
  sections: string[] = ['whyMe', 'skills', 'projects', 'contact'];
  isVisible = false;


  constructor(private router: Router) { }

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

  
  /**
   * Toggles the visibility of the navigation menu.
   * When the menu is visible, the arrow down in the hero section is hidden.
   * When the menu is not visible, the arrow down in the hero section is shown.
   */
  toggleMenu() {
    this.isVisible = !this.isVisible;
  }
}
