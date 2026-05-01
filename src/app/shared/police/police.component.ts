import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef, ViewChild, HostListener } from '@angular/core';


@Component({
  selector: 'app-police',
  standalone: true,
  imports: [MenuComponent, TranslateModule, CommonModule],
  templateUrl: './police.component.html',
  styleUrl: './police.component.scss'
})


export class PoliceComponent implements OnDestroy {
  activeSection: string = '';
  sections: string[] = ['whyMe', 'skills', 'projects', 'contact'];
  isVisible = false;
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('burger') burgerRef!: ElementRef;


  /**
   * Resets body scroll on component destroy.
   */
  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }


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


  /**
   * Toggles the visibility of the navigation menu.
   * When the menu is visible, the arrow down in the hero section is hidden.
   * When the menu is not visible, the arrow down in the hero section is shown.
   */
  toggleMenu() {
    this.isVisible = !this.isVisible;
    document.body.style.overflow = this.isVisible ? 'hidden' : 'auto';
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


  @HostListener('document:click', ['$event'])


  /**
   * Closes the menu when clicking outside of it or the burger button.
   * Restores page scrolling.
   *
   * @param event Click event from document listener.
   */
  handleClick(event: MouseEvent) {
    if (!this.isVisible) return;

    const clickedInsideMenu = this.menuRef?.nativeElement.contains(event.target);
    const clickedBurger = this.burgerRef?.nativeElement.contains(event.target);

    if (!clickedInsideMenu && !clickedBurger) {
      this.isVisible = false;
      document.body.style.overflow = 'auto';
    }
  }
}
