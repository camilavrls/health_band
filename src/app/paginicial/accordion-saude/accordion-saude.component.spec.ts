import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSaudeComponent } from './accordion-saude.component';

describe('AccordionSaudeComponent', () => {
  let component: AccordionSaudeComponent;
  let fixture: ComponentFixture<AccordionSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionSaudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
