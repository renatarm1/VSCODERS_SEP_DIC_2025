import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abigail } from './abigail';

describe('Abigail', () => {
  let component: Abigail;
  let fixture: ComponentFixture<Abigail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abigail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abigail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
