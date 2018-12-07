import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Select2Module } from 'ng2-select2';
//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterProducts, SafePipe } from './pipes/evn-pipes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrequestionsComponent } from './components/prequestions.component';
import { QuestionComponent, Question1, Question2, Question3, Question4, Question5, Question6 } from './components/app.question1';
import { Results } from './components/app.results';

@NgModule({
  declarations: [
    AppComponent, FilterProducts, PrequestionsComponent, QuestionComponent, Question1, Question2, Question3, Question4, Question5, Question6, Results, SafePipe
  ],
  entryComponents: [QuestionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    Select2Module
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
