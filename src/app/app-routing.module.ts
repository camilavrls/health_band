import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginicialComponent } from './paginicial/paginicial/paginicial.component';


const routes: Routes = [
  {path: '**', redirectTo: 'paginicial', pathMatch: 'full'},
  {path: 'paginicial', component: PaginicialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
