import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {SearchService} from '../search.service';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-text-article-list',
  templateUrl: './text-article-list.component.html',
  styleUrls: ['./text-article-list.component.css']
})
export class TextArticleListComponent implements OnInit {

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
