import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrequestionsComponent } from '../components/prequestions.component';

const routes: Routes = [
  { path: 'product-selector', component: PrequestionsComponent },
  { path: '', redirectTo: '/product-selector', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
