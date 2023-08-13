import { articles } from './data/articles';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Newsfeed', url: '/newfeed', icon: 'newspaper' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Friends', url: '/friends', icon: 'people' },
  ];
  constructor() {}
}
