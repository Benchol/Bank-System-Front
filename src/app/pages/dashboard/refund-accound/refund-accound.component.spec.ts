import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAccoundComponent } from './refund-accound.component';

describe('RefundAccoundComponent', () => {
  let component: RefundAccoundComponent;
  let fixture: ComponentFixture<RefundAccoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundAccoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundAccoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
