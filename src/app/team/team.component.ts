import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any[];
  responsiveOptions;

  teamMembers = [
    'Adams Baker',
    'Mary Evans',
    'Sarah Lopez',
    'Joseph Hills',
    'Karen Usman'
  ];

  itemsPerSlide2 = 5;
  slides2 = [
    { image: 'assets/images/logo-1.png' },
    { image: 'assets/images/logo-2.png' },
    { image: 'assets/images/logo-3.png' },
    { image: 'assets/images/logo-4.png' },
    { image: 'assets/images/logo-5.png' },
    { image: 'assets/images/logo-6.png' },
    { image: 'assets/images/logo-7.png' },
    { image: 'assets/images/logo-8.png' },
  ];


  itemsPerSlide = 5;
  singleSlideOffset = true;
  singleSlideMargin = 30;
  noWrap = false;
  cycleInterval = 3000;
  slides = [
    { image: 'assets/images/team-1.jpg' },
    { image: 'assets/images/team-2.jpg' },
    { image: 'assets/images/team-3.jpg' },
    { image: 'assets/images/team-4.jpg' },
    { image: 'assets/images/team-5.jpg' },
  ];





  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
  }

  teamMember(index: number) {
    return this.teamMembers[index];

  }

}