import { Injectable } from '@angular/core';
//import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Select2OptionData, Select2TemplateFunction } from 'ng2-select2';
import { Select2Question, Question, FullAnswer } from '../models/question';
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

  // Vars to use for answering the questions in the views. After each question is answerewd this.filterTags() goes thorugh these to rebuild the 
  // selectedProducts array. I did it like this in case "back" is selected and a question's answer is changed.  
  public question0: any;
  public question1:any;
  public question2:any;
  public question3:any;
  public question4:any;
  public question5:any;
  public question6:any;
  public question7:any;
  public question8:any;
  public questionsObservable : Observable<Questions> = this.http.get<Questions>("./assets/data/evn-questions.json"); // Observable to use to load all the questions
  public productsObservable : Observable<Products> = this.http.get<Products>("./assets/data/evn-product-tags.json"); // Observable to use to load all the products
  public jsonQuestions: Questions; // Raw questions as loaded straight from evn-questions.json


  // Storage for header icon when question #2 is selected
  public headerIcon: any;

 // Arrays for storage.
  public preQuestions: Array<Select2Question> = []; // First three questions
  public questions: Array<Select2Question> = []; // The rest of the questions
  public products: Array<Product> = []; // The products and associated tags for filtering
  public selectedProducts: any = []; // Array for the tags selected by the answers of questions 4+


  public fullAnswers: any = [];

  // Functions for manipulating the answers
  public updateQuestions(event:any){
    const newVal = event.value == undefined ? event.currentTarget.value : event.value;
       // console.log(newVal);
        let thisId = event.data == undefined ? Number(event.currentTarget.dataset.questionId) : event.data[0].additional["question"];
    switch(thisId){
      case 0:
        
      this.question0 = newVal;
      var answer = this.preQuestions[0].answers.filter(answr=> answr.id == newVal);

      break;
      case 1:

      this.question1 = newVal;
      var answer = this.preQuestions[1].answers.filter(answr=> answr.id == newVal);
      this.headerIcon = "<img src='./assets/images/Icons/" + event.data[0].additional["icon"] + "'/><p>" + event.data[0].text + "</p>";
      break;
      case 2:

      var answer = this.preQuestions[2].answers.filter(answr=> answr.id == newVal);
      this.question2 = newVal;
      break;
      case 3:

      this.question3 = newVal;
      var answer = this.questions[0].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q1";
      fullAns.textAnswer = answer[0].answer;
      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
       // console.log( this.fullAnswers[idx].textAnswer);
        this.fullAnswers[idx].textAnswer = answer[0].answer;
      }else{
      this.fullAnswers.push(fullAns);
      }
      break;
      case 4:

      this.question4 = newVal;
      var answer = this.questions[1].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q2";
      fullAns.textAnswer = answer[0].answer;
      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
        this.fullAnswers[idx].textAnswer = answer[0].answer;
      }else{
        this.fullAnswers.push(fullAns);
      }
      break;
      case 5:

      this.question5 = newVal;
      var answer = this.questions[2].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q3";
      fullAns.textAnswer = answer[0].answer;

      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
        this.fullAnswers[idx].textAnswer = answer[0].answer;
      }else{
       this.fullAnswers.push(fullAns);
      }
      break;

      case 6:
      var answer = this.questions[3].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q4";
      fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text: answer[0].answer;
      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
        this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
      }else{
      this.fullAnswers.push(fullAns);
      }
      break;
      case 7:

      this.question7 = newVal;
      var answer = this.questions[4].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q5";
      fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text: answer[0].answer;
      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
        this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
      }else{
      this.fullAnswers.push(fullAns);
      }
      break;
      case 8:

      this.question8 = newVal;
      var answer = this.questions[5].answers.filter(answr=> answr.id == newVal);
      var fullAns: FullAnswer = new FullAnswer();
      fullAns.questionNum = "Q6";
      fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text: answer[0].answer;
      var idx = this.getFullAnswerExist(fullAns.questionNum);
      if(idx != -1){
        this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
      }else{
      this.fullAnswers.push(fullAns);
      }
      break;
    }

    this.updateFilterTags();
  }

  updateFilterTags(){

    this.selectedProducts.length = 0;
    if(this.question0 != null && this.question0 != "" && this.question0 != "none"){

      this.selectedProducts.push(this.question0);
    }
    if(this.question1 != null && this.question1 != "" && this.question1 != "none"){ 

    }
    if(this.question2 != null && this.question2 != "" && this.question2 != "none"){

    }
    if(this.question3 != null && this.question3 != "" && this.question3 != "none" ){
      
      this.selectedProducts.push(this.question3);
    }
    if(this.question4 != null && this.question4 != "" && this.question4 != "none" ){
      
      this.selectedProducts.push(this.question4);
    }
    if(this.question5 != null && this.question5 != ""  && this.question5 != "none"){
     
      this.selectedProducts.push(this.question5);
    }
    if(this.question6 != null && this.question6 != "" && this.question6 != "none"){
      
      this.selectedProducts.push(this.question6);
    }
    if(this.question7 != null && this.question7 != "" && this.question7 != "none"){
     
      this.selectedProducts.push(this.question7);
    }
    if(this.question8 != null && this.question8 != "" && this.question8 != "none"){
    
      this.selectedProducts.push(this.question8);
    }
    //console.log(this.selectedProducts);
  }

  // Reset all pertinent arrays and the main questions if question #1 (US/CANADA) is answered.
  resetQuestions(){
    this.selectedProducts.length = 0;
    this.fullAnswers.length = 0;
    //this.question0 = "";
    //this.question1 = "";
    //this.question2 = "";
    this.question3 = "";
    this.question4 = "";
    this.question5 = "";
    this.question6 = "";
    this.question7 = "";
    this.question8 = "";
  }

   // Functions for select2 select boxes
       // function for result template
       public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
          return state.text;
        }
    
        let image = '<span class="image"></span>';
    
        if (state.additional.icon) {
          image = '<span class="image"><img src="./assets/images/Icons/' + state.additional.icon + '"</span>';
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
          image = '<span class="image"><img src="./assets/images/Icons/' + state.additional.icon + '"</span>';
        }
    
        return jQuery('<span class="select-option-span">' + image + ' ' + state.text + '</span>');
      }

      private getFullAnswerExist(qnum:string):number{
         var ret = this.fullAnswers.findIndex(x => x.questionNum == qnum);
        // console.log('test' + ret);
         return ret;
      }
      

}



