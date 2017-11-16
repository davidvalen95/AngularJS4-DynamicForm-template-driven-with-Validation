import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorSecondComponent } from './show-error-second.component';

describe('ShowErrorSecondComponent', () => {
  let component: ShowErrorSecondComponent;
  let fixture: ComponentFixture<ShowErrorSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowErrorSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
