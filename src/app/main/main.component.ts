import { Component } from '@angular/core';
import { HeroComponent } from '../content/hero/hero.component';
import { MeComponent } from '../content/me/me.component';
import { SkillsComponent } from '../content/skills/skills.component';
import { ProjectsComponent } from '../content/projects/projects.component';
import { ReviewComponent } from '../content/review/review.component';
import { ContactComponent } from '../content/contact/contact.component';
import { MenuComponent } from '../shared/menu/menu.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    MeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReviewComponent,
    ContactComponent,
    MenuComponent
  ],

  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent { }
