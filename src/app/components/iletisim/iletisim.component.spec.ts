import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletisimComponent } from './iletisim.component';

describe('IletisimComponent', () => {
  let component: IletisimComponent;
  let fixture: ComponentFixture<IletisimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IletisimComponent]
    });
    fixture = TestBed.createComponent(IletisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
