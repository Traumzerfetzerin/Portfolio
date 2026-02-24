import { Component } from '@angular/core';
import { HeroComponent } from '../content/hero/hero.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { MeComponent } from '../content/me/me.component';
import { SkillsComponent } from '../content/skills/skills.component';
import { ProjectsComponent } from '../content/projects/projects.component';
import { ReviewComponent } from '../content/review/review.component';
import { ContactComponent } from '../content/contact/contact.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    MenuComponent,
    MeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReviewComponent,
    ContactComponent
  ],
  template: `
    <app-hero id="hero"></app-hero>
    <app-menu id="menu"></app-menu>
    <div class="gap">
    <app-me id="whyMe"></app-me>
    <app-skills id="skills"></app-skills>
    <app-projects id="projects"></app-projects>
    <app-review id="review"></app-review>
    <app-contact id="contact"></app-contact>
    </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent { }
