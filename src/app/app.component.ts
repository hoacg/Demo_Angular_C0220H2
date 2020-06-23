import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'angular-c0220h2-demo';
  isShow = true;

  userRating: number;

  countDownSecond = 5;

  showMessage() {
    alert('Het gio');
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  changeCountdownSecond() {
    this.countDownSecond = 20;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent, ngOnChanges được gọi: ', changes);
  }


}
