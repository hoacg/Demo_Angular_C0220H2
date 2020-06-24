import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenUserFormComponent } from './template-driven-user-form.component';

describe('TemplateDrivenUserFormComponent', () => {
  let component: TemplateDrivenUserFormComponent;
  let fixture: ComponentFixture<TemplateDrivenUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
