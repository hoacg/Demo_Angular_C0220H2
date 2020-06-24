import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
    console.log('SearchService được tạo trong bộ nhớ!');
  }

  public searchInput = new Subject<string>();

}
