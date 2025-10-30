import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lidia } from './lidia';

describe('Lidia', () => {
  let component: Lidia;
  let fixture: ComponentFixture<Lidia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lidia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lidia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
