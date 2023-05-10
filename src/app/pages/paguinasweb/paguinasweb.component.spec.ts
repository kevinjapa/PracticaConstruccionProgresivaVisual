import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaguinaswebComponent } from './paguinasweb.component';

describe('PaguinaswebComponent', () => {
  let component: PaguinaswebComponent;
  let fixture: ComponentFixture<PaguinaswebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaguinaswebComponent]
    });
    fixture = TestBed.createComponent(PaguinaswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
