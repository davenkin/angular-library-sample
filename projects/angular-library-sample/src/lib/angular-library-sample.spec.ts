import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibrarySample } from './angular-library-sample';

describe('AngularLibrarySample', () => {
  let component: AngularLibrarySample;
  let fixture: ComponentFixture<AngularLibrarySample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibrarySample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLibrarySample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
