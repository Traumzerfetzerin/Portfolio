import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { ElementRef, ViewChild, HostListener } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, MenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})


export class HeroComponent {
  activeSection: string = '';
  sections: string[] = ['whyMe', 'skills', 'projects', 'contact'];
  isVisible = false;
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('burger') burgerRef!: ElementRef;


  /**
   * Constructor for the HeroComponent.
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
   * @example
   * switchLang('en')
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


  /**
   * Toggles the visibility of the navigation menu.
   * When the menu is visible, the arrow down in the hero section is hidden.
   * When the menu is not visible, the arrow down in the hero section is shown.
   */
  toggleMenu() {
    this.isVisible = !this.isVisible;
  }


  @HostListener('document:click', ['$event'])

  handleClick(event: MouseEvent) {
    if (!this.isVisible) return;

    const clickedInsideMenu = this.menuRef?.nativeElement.contains(event.target);
    const clickedBurger = this.burgerRef?.nativeElement.contains(event.target);

    if (!clickedInsideMenu && !clickedBurger) {
      this.isVisible = false;
    }
  }
}
