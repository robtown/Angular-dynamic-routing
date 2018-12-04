import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrequestionsComponent } from '../components/prequestions.component';
import { Question1, Question2, Question3, Question4, Question5, Question6 } from '../components/app.question1';
import { Results } from '../components/app.results';

const routes: Routes = [
  { path: 'product-selector', component: PrequestionsComponent, data: { state: 'Prequestions', num: 0 } },
  { path: '', redirectTo: '/product-selector', pathMatch: 'full' },
  { path: 'Q1', component: Question1, data: { state: 'Q1', num: 1 } },
  { path: 'Q2', component: Question2, data: { state: 'Q2', num: 2 } },
  { path: 'Q3', component: Question3, data: { state: 'Q3', num: 3 } },
  { path: 'Q4', component: Question4, data: { state: 'Q4', num: 4 } },
  { path: 'Q5', component: Question5, data: { state: 'Q5', num: 5 } },
  { path: 'Q6', component: Question6, data: { state: 'Q6', num: 6 } },
  { path: 'Results', component: Results, data: { state: 'Results', num: 10000 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: true
  })],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
