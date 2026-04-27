import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

// shared
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';

// content
import { HeroComponent } from './content/hero/hero.component';
import { MeComponent } from './content/me/me.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ReviewComponent } from './content/review/review.component';
import { ContactComponent } from './content/contact/contact.component';
import { ProjectsComponent } from './content/projects/projects.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    MenuComponent,
    HeroComponent,
    MeComponent,
    SkillsComponent,
    ReviewComponent,
    ContactComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements AfterViewInit {
  title = 'Portfolio';


  /**
   * Initializes the AOS (Animate On Scroll) library after the component view has been fully initialized.
   *
   * @remarks
   * This lifecycle hook ensures that all DOM elements are rendered before AOS scans
   * and applies animations. Without this, AOS might not detect elements correctly.
   *
   * @description
   * - Sets animation duration to 800ms
   * - Ensures animations run only once (`once: true`)
   * - Applies an offset of 120px before triggering animations
   */
  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120
    });
  }
}