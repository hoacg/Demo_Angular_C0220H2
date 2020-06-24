import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../article.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-model-driven-user-form',
  templateUrl: './model-driven-user-form.component.html',
  styleUrls: ['./model-driven-user-form.component.css']
})
export class ModelDrivenUserFormComponent implements OnInit {

  articleForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]),
    image: new FormControl(),
    content: new FormControl()
  });

  constructor(
    private searchService: SearchService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  saveArticle() {
    console.log(this.articleForm.value);
    this.articleService.fullArticleList.push(this.articleForm.value);
    this.searchService.searchInput.next('');
  }

}
