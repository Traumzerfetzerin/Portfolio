import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {
  constructor(private router: Router) { }

  /**
   * Scroll to the given element with the given id.
   * If the current router URL is not '/', navigate to '/' with the given sectionId as the fragment.
   * Otherwise, get the element with the given id and scroll it into view with a smooth animation and block set to 'start'.
   * @param {string} sectionId - The id of the element to scroll to.
   */
  scrollTo(sectionId: string) {

    if (this.router.url !== '/') {

      this.router.navigate(['/'], { fragment: sectionId });
    } else {

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}