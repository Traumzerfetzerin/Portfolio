import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-police',
  standalone: true,
  imports: [MenuComponent, TranslateModule],
  templateUrl: './police.component.html',
  styleUrl: './police.component.scss'
})


export class PoliceComponent {
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
