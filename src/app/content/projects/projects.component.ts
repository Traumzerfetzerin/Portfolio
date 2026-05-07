import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatTabsModule, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {

  constructor(private router: Router) { }
}
