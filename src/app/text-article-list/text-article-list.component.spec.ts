import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArticleListComponent } from './text-article-list.component';

describe('TextArticleListComponent', () => {
  let component: TextArticleListComponent;
  let fixture: ComponentFixture<TextArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
