import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-saude',
  templateUrl: './accordion-saude.component.html',
  styleUrls: ['./accordion-saude.component.scss']
})
export class AccordionSaudeComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
