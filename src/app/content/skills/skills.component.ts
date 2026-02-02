import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})


export class SkillsComponent {
  skills = [
    { img: 'assets/img/skills/Angular.png', name: 'Angular' },
    { img: 'assets/img/skills/TypeScript.png', name: 'TypeScript' },
    { img: 'assets/img/skills/Javascript.png', name: 'JavaScript' },
    { img: 'assets/img/skills/html.png', name: 'HTML' },
    { img: 'assets/img/skills/css.png', name: 'CSS' },
    { img: 'assets/img/skills/api.png', name: 'REST-API' },
    { img: 'assets/img/skills/Firebase.png', name: 'Firebase' },
    { img: 'assets/img/skills/git.png', name: 'Git' },
    { img: 'assets/img/skills/MaterialDesign.png', name: 'Material Design' },
    { img: 'assets/img/skills/Scrum.png', name: 'Scrum' }
  ];
}
