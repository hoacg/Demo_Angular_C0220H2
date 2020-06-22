import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchKeywords = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchKeypress(event) {
    const keywords = event.target.value;
    this.searchService.searchInput.next(keywords);
  }

}
