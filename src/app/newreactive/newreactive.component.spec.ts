import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreactiveComponent } from './newreactive.component';

describe('NewreactiveComponent', () => {
  let component: NewreactiveComponent;
  let fixture: ComponentFixture<NewreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewreactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
