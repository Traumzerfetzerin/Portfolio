import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})


export class ReviewComponent {
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
