import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstandaresComponent } from './estandares.component';

describe('EstandaresComponent', () => {
  let component: EstandaresComponent;
  let fixture: ComponentFixture<EstandaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstandaresComponent]
    });
    fixture = TestBed.createComponent(EstandaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
