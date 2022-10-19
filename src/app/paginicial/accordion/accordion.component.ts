import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  panelOpenState = false;

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
