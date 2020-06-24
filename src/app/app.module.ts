import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { TextArticleListComponent } from './text-article-list/text-article-list.component';
import { TemplateDrivenUserFormComponent } from './template-driven-user-form/template-driven-user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModelDrivenUserFormComponent } from './model-driven-user-form/model-driven-user-form.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { routes } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    NavbarComponent,
    ArticleListComponent,
    TextArticleListComponent,
    TemplateDrivenUserFormComponent,
    ModelDrivenUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
