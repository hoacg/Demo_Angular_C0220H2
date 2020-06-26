import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Article[]>(this.apiUrl);
  }

  createArticle(article: Article) {
    return this.httpClient.post(this.apiUrl, article);
  }

  updateArticle(articeId: number, article: Article) {
    return this.httpClient.put(`${this.apiUrl}/${articeId}`, article);
  }
}
