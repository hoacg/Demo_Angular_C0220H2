import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import {FormsModule} from '@angular/forms';
import { TextArticleListComponent } from './text-article-list/text-article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    NavbarComponent,
    ArticleListComponent,
    TextArticleListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
