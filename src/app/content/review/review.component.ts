import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})


export class ReviewComponent {
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


  reviews = [
    {
      name: 'Name',
      project: 'Project A',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    },
    {
      name: 'Name',
      project: 'Project B',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    },
    {
      name: 'Name',
      project: 'Project C',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      linkedin: '#'
    }
  ];
}
