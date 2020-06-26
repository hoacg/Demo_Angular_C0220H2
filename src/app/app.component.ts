import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './article';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  articleList: Article[];

  articleForm: FormGroup = new FormGroup({
    title: new FormControl(),
    body: new FormControl()
  });

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAll().subscribe( articles => {
      this.articleList = articles;
    }, error => {
      alert('Lỗi xử lý trên Backend!');
    });
  }

  onSubmit() {
    const article = this.articleForm.value;
    this.articleService.createArticle(article).subscribe( result => {
      console.log(result);
    });
  }

}
