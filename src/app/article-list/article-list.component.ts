import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {SearchService} from '../search.service';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  filterArticles: Article[];

  constructor(private searchService: SearchService, private articleService: ArticleService) { }

  ngOnInit() {
    this.filterArticles = this.articleService.fullArticleList;

    this.searchService.searchInput.subscribe( keywords => {
      this.filterArticles = this.articleService.fullArticleList
        .filter( item => item.title.toLowerCase().includes(keywords.toLowerCase()) );
    });
  }

}
