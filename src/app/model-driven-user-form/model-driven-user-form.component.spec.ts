import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenUserFormComponent } from './model-driven-user-form.component';

describe('ModelDrivenUserFormComponent', () => {
  let component: ModelDrivenUserFormComponent;
  let fixture: ComponentFixture<ModelDrivenUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
