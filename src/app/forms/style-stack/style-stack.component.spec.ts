import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleStackComponent } from './style-stack.component';

describe('StyleStackComponent', () => {
  let component: StyleStackComponent;
  let fixture: ComponentFixture<StyleStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
