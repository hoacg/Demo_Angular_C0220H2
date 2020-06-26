import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  articleList: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAll().subscribe( articles => {
      this.articleList = articles;
    }, error => {
      alert('Lỗi xử lý trên Backend!');
    });
  }

}
