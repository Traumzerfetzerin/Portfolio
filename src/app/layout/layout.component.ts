import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, FooterComponent],
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})


export class LayoutComponent { }
