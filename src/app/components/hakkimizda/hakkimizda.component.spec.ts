import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkimizdaComponent } from './hakkimizda.component';

describe('HakkimizdaComponent', () => {
  let component: HakkimizdaComponent;
  let fixture: ComponentFixture<HakkimizdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HakkimizdaComponent]
    });
    fixture = TestBed.createComponent(HakkimizdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
