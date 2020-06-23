import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TemplateDrivenUserFormComponent } from './template-driven-user-form/template-driven-user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModelDrivenUserFormComponent } from './model-driven-user-form/model-driven-user-form.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    TemplateDrivenUserFormComponent,
    ModelDrivenUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
