import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginicialComponent } from './paginicial/paginicial.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AccordionComponent } from './accordion/accordion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AccordionSaudeComponent } from './accordion-saude/accordion-saude.component';
import { AccordionPessoalComponent } from './accordion-pessoal/accordion-pessoal.component';



@NgModule({
  declarations: [
    PaginicialComponent,
    HeaderComponent,
    AccordionComponent,
    AccordionSaudeComponent,
    AccordionPessoalComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ]
})
export class PaginicialModule { }
