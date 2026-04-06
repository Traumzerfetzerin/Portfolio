import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})


export class ImprintComponent {
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }


  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
