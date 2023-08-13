import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from '../data/articles';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  article: any;
  icon: string = '';
  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.article = articles.find((article) => String(article.id) === id);

    this.icon = this.article.isLiked ? 'thumbs-up' : 'thumbs-up-outline';
  }

  handleLike() {
    this.article.isLiked = !this.article.isLiked;

    if (this.article.isLiked) {
      this.icon = 'thumbs-up';
      this.article.likes++;
    } else {
      this.icon = 'thumbs-up-outline';
      this.article.likes--;
    }
  }
}
