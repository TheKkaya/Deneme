import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCompanentComponent } from './button-companent.component';

describe('ButtonCompanentComponent', () => {
  let component: ButtonCompanentComponent;
  let fixture: ComponentFixture<ButtonCompanentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCompanentComponent]
      
    });
    fixture = TestBed.createComponent(ButtonCompanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
