import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGreetingCardComponent } from './create-greeting-card.component';

describe('CreateGreetingCardComponent', () => {
  let component: CreateGreetingCardComponent;
  let fixture: ComponentFixture<CreateGreetingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGreetingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGreetingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
