import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPessoalComponent } from './accordion-pessoal.component';

describe('AccordionPessoalComponent', () => {
  let component: AccordionPessoalComponent;
  let fixture: ComponentFixture<AccordionPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPessoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
