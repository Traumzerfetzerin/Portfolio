import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';


// shared
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PoliceComponent } from './shared/police/police.component';

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
  imports: [CommonModule, RouterOutlet, MatTabsModule, FooterComponent, ImprintComponent, MenuComponent, PoliceComponent, HeroComponent, MeComponent, SkillsComponent, ReviewComponent, ContactComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'Portfolio';
}
