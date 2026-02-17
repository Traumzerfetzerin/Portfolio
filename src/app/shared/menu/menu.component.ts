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
   * Scrolls to the given element with the given id.
   * If the current URL is not the root URL, navigates to the root URL and sets the fragment to 'hero'.
   * If the current URL is the root URL, scrolls into view the element with the id 'hero' if it exists.
   * @param {string} sectionId - The id of the element to scroll to.
   */
  scrollTo(sectionId: string) {

    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: 'hero' });
    } else {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
