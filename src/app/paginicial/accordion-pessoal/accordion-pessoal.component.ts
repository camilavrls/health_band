import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-pessoal',
  templateUrl: './accordion-pessoal.component.html',
  styleUrls: ['./accordion-pessoal.component.scss']
})
export class AccordionPessoalComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
