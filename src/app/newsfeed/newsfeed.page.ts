import { Component, OnInit } from '@angular/core';
import { articles } from '../data/articles';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  articles: any[] = articles;

  constructor() {}

  ngOnInit() {}
}
