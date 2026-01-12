import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardo } from './cardo';

describe('Cardo', () => {
  let component: Cardo;
  let fixture: ComponentFixture<Cardo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
