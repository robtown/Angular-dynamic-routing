import { Injectable } from '@angular/core';
//import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Select2OptionData, Select2TemplateFunction } from 'ng2-select2';
import { Select2Question } from '../models/question';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Convert, Questions, Products } from "../models/interfaces";
import { Product } from '../models/product';


const httpOptions = {
 // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public question0: any;
  public question1:any;
  public question2:any;
  public question3:any;
  public question4:any;
  public question5:any;
  public question6:any;
  public question7:any;
  public question8:any;
  public questionsObservable : Observable<Questions> = this.http.get<Questions>("../assets/data/evn-questions.json");
  public productsObservable : Observable<Products> = this.http.get<Products>("../assets/data/evn-product-tags.json");
  public jsonQuestions: Questions;
  public answeredQuestions:any = ["","","","","","","","",""];

  // Storage for header icon
  public headerIcon: any;

 // Arrays for storage.
  public preQuestions: Array<Select2Question> = [];
  public questions: Array<Select2Question> = [];
  public products: Array<Product> = [];
  public selectedProducts: any = [];

  // Functions for manipulating the answers
  public updateQuestions(event:any){
    const newVal = event.value == undefined ? event.currentTarget.value : event.value;
        console.log(newVal);
        let thisId = event.data == undefined ? event.currentTarget.dataset.questionId : event.data[0].additional["question"];
    switch(thisId){
      case 0:
      if(newVal != "none" ){
      this.question0 = newVal;
      }else{
        this.question0 = "none";
      }
      break;
      case 1:
      if(newVal != "none" ){
      this.question1 = newVal;
      this.headerIcon = "<img src='/assets/images/Icons/" + event.data[0].additional["icon"] + "'/><p>" + event.data[0].text + "</p>";
      }else{
        this.question1 = "none";
      }
      break;
      case 2:
      if(newVal != "none" ){
      this.question2 = newVal;
      }else{
        this.question2 = "none";
      }
      break;
      case 3:
      if(newVal != "none" ){
      this.question3 = newVal;
      }else{
        this.question3 = "none";
      }
      break;
      case 4:
      if(newVal != "none" ){
      this.question4 = newVal;
      }else{
        this.question4 = "none";
      }
      break;
      case 5:
      if(newVal != "none" ){
      this.question5 = newVal;
      }else{
        this.question5 = "none";
      }
      break;
      case 6:
      if(newVal != "none" ){
      this.question6 = newVal;
      }else{
        this.question6 = "none";
      }
      break;
      case 7:
      if(newVal != "none" ){
      this.question7 = newVal;
      }else{
        this.question7 = "none";
      }
      break;
      case 8:
      if(newVal != "none" ){
      this.question8 = newVal;
      }else{
        this.question8 = "none";
      }
      break;
    }
    this.updateFilterTags();
  }

  getQuestionAnswers(question:any){
      var thequestion = this.questions.filter(answers => answers.sortOrder == question);
      console.log(thequestion);


  }

  updateFilterTags(){
    //this.filterTags.length = 0;
    this.selectedProducts.length = 0;
    if(this.question0 != null && this.question0 != "" && this.question0 != "none"){
     // this.filterTags.push(this.question0);
      this.selectedProducts.push(this.question0);
    }
    if(this.question1 != null && this.question1 != "" && this.question1 != "none"){ 
     // this.filterTags.push(this.question1);
      this.selectedProducts.push(this.question1);
    }
    if(this.question2 != null && this.question2 != "" && this.question2 != "none"){
      //this.filterTags.push(this.question2);
      this.selectedProducts.push(this.question2);
    }
    if(this.question3 != null && this.question3 != "" && this.question3 != "none" ){
      //this.filterTags.push(this.question3);
      this.selectedProducts.push(this.question3);
    }
    if(this.question4 != null && this.question4 != "" && this.question4 != "none" ){
      //this.filterTags.push(this.question4);
      this.selectedProducts.push(this.question4);
    }
    if(this.question5 != null && this.question5 != ""  && this.question5 != "none"){
     // this.filterTags.push(this.question5);
      this.selectedProducts.push(this.question5);
    }
    if(this.question6 != null && this.question6 != "" && this.question6 != "none"){
      //this.filterTags.push(this.question6);
      this.selectedProducts.push(this.question6);
    }
    if(this.question7 != null && this.question7 != "" && this.question7 != "none"){
     // this.filterTags.push(this.question7);
      this.selectedProducts.push(this.question7);
    }
    if(this.question8 != null && this.question8 != "" && this.question8 != "none"){
      //this.filterTags.push(this.question8);
      this.selectedProducts.push(this.question8);
    }
    console.log(this.selectedProducts);
  }

   // Functions for select2 select boxes
       // function for result template
       public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
          return state.text;
        }
    
        let image = '<span class="image"></span>';
    
        if (state.additional.icon) {
          image = '<span class="image"><img src="/assets/images/Icons/' + state.additional.icon + '"</span>';
        }
    
        return jQuery('<span class="select-option-span">' + image + ' ' + state.text + '</span>');
      }
    
      // function for selection template
      public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
          return state.text;
        }
        let image = '<span class="image"></span>';
    
        if (state.additional.icon) {
          image = '<span class="image"><img src="/assets/images/Icons/' + state.additional.icon + '"</span>';
        }
    
        return jQuery('<span class="select-option-span">' + image + ' ' + state.text + '</span>');
      }
      

}



