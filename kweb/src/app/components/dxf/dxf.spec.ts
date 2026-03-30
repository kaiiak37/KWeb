import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dxf } from './dxf';

describe('Dxf', () => {
  let component: Dxf;
  let fixture: ComponentFixture<Dxf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dxf],
    }).compileComponents();

    fixture = TestBed.createComponent(Dxf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
