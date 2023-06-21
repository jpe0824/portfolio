import { Component, HostListener } from '@angular/core';
export interface Tile {
  icon: string;
  text: string;
  cols: number;
  rows: number;
}
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  tiles: Tile[] = [
    { icon: 'fa-brands fa-python fa-2xl', text: 'Python', cols: 1, rows: 1 },
    {
      icon: 'fa-brands fa-square-js fa-2xl',
      text: 'TypeScript/Javascript',
      cols: 1,
      rows: 1,
    },
    { icon: 'fa-brands fa-docker fa-2xl', text: 'Docker', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-java fa-2xl', text: 'Java', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-html5 fa-2xl', text: 'HTML5', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-css3-alt fa-2xl', text: 'CSS3', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-angular fa-2xl', text: 'Angular', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-react fa-2xl', text: 'React', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-git-alt fa-2xl', text: 'Git', cols: 1, rows: 1 },
    { icon: 'fa-brands fa-github fa-2xl', text: 'Github', cols: 1, rows: 1 },
    {
      icon: 'fa-solid fa-cloud fa-2xl',
      text: "RESTful API's",
      cols: 1,
      rows: 1,
    },
    {
      icon: 'fa-solid fa-database fa-2xl',
      text: 'Postgresql',
      cols: 1,
      rows: 1,
    },
    {
      icon: 'fa-solid fa-laptop-code fa-2xl',
      text: 'VS Code',
      cols: 1,
      rows: 1,
    },
    {
      icon: 'fa-solid fa-terminal fa-2xl',
      text: 'Command Line',
      cols: 1,
      rows: 1,
    },
    // Add more skills as needed
  ];
  numCols = 8;

  constructor() {
    this.updateNumCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateNumCols();
  }

  updateNumCols() {
    const screenWidth = window.innerWidth;
    this.numCols = screenWidth >= 768 ? 7 : 2;
  }
}
