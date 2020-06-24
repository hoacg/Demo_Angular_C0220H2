import {Routes} from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ModelDrivenUserFormComponent} from './model-driven-user-form/model-driven-user-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },

  {
    path: 'add-article',
    component: ModelDrivenUserFormComponent
  }
];
