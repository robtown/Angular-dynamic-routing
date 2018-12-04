import { Component, OnInit } from '@angular/core';
import { Select2OptionData, Select2TemplateFunction } from 'ng2-select2';
import { QuestionsService } from '../services/questions.service';
import { Question, SelectValue, Select2Question } from '../models/question';
import { Product } from '../models/product';
import * as $ from 'jquery';
import { Observable, of } from 'rxjs';
import { Convert, Questions, PrequestionClass } from "../models/interfaces";
declare var showBack: any;


@Component({
  selector: 'prequestions',
  templateUrl: '../views/_prequestions.html',
  
})

export class PrequestionsComponent implements OnInit{
  // Questions 1-3
  prequestions: any = [];
  // Questions 4-9
  questions: any = [];
  // Products array
  products: any = [];

     
  

  answeredQuestions:any = [];
  
  jsonQuestions: Questions;
  loaded: boolean = false;
  
  constructor(private questionsService: QuestionsService) { }
  qs: any = this.questionsService;
  pageState = this.qs.orientation;
  title:any;
  ngOnInit() {
    showBack(this.questionsService.question0);
    if(this.questionsService.preQuestions.length > 0){
      this.questionsService.preQuestions.length = 0;
      this.loadPrequestions();
      }else{
      this.questionsService.questionsObservable.subscribe(res=>{
              this.jsonQuestions = res;
              if(!this.questionsService.jsonQuestions){
                this.questionsService.jsonQuestions = res;
                this.questionsService.jsonQuestions.options = {
                  multiple: false,
                  placeholder: 'Select One',
                  minimumResultsForSearch: Infinity,
                  templateResult: this.questionsService.templateResult,
                  templateSelection: this.questionsService.templateSelection
                };
              }
              this.loadPrequestions();
            });

          }

            
    }

    loadPrequestions(){
     
    // Not really using the title, but it's there if needed...
    // this.title = this.questionsService.jsonQuestions.appname;

    // Loadin

      if(this.questionsService.preQuestions.length == 0){
        var questionIndex:any  = 0
        this.questionsService.jsonQuestions.prequestions.forEach(prequestion => {
                  let questionForSelect2 : Select2Question = new Select2Question();

                  questionForSelect2.question = prequestion[0];
                  questionForSelect2.sortOrder = prequestion[2];
                var rows2 = <Array<any>>prequestion[1];
                  rows2.forEach(element => {
                    var option = {
                      'id': element.value,
                      'text':  element.text,
                      additional: {
                        question: questionIndex,
                        icon: element.icon,
                        image: element.image
                      }
                      };
                      questionForSelect2.answers.push(option);
                    });
                    this.questionsService.preQuestions.push(questionForSelect2);
                    questionIndex ++;
                    this.answeredQuestions.push("");
              });
            }
            this.prequestions = this.questionsService.preQuestions;
            this.getProducts();

            if(this.questionsService.question0){ 
              this.answeredQuestions[0] = this.questionsService.question0;
            }
            if(this.questionsService.question1){ 
            this.answeredQuestions[1] = this.questionsService.question1; 
          }
            if(this.questionsService.question2){ 
            this.answeredQuestions[2] = this.questionsService.question2; 
          }
    }
    loadQuestions(){
           
      this.questionsService.questions.length = 0;
                  //if(this.questionsService.questions.length == 0){
                    var questionIndex:any  = 3
                    this.questionsService.jsonQuestions.questions.forEach(question => {
                              let questionForSelect2 : Select2Question = new Select2Question();
      
                              questionForSelect2.question = question[0];
                              questionForSelect2.sortOrder = question[2];
                              questionForSelect2.excludeValues = question[3];
                              //questionForSelect2.class = question[4];

                            var rows2 = <Array<any>>question[1];
                              rows2.forEach(element => {
                                var option = {
                                  'id': element.value,
                                  'text':  element.text,
                                  'answer': element.answer,
                                  additional: {
                                    question: questionIndex,
                                    icon: element.icon
                                  }
                                  };
                                  questionForSelect2.answers.push(option);
                                });
                                if(questionForSelect2.excludeValues.questionExclude.indexOf(this.questionsService.question0) == -1){
                                this.questionsService.questions.push(questionForSelect2);
                                this.answeredQuestions.push("");
                                }
                                questionIndex ++;
                          });
                       // }
      

                  
                  this.questions = this.questionsService.questions;
                  
                 


    }
     

      getProducts(){
        if(this.questionsService.products.length == 0){
        this.questionsService.productsObservable.subscribe(
          data => {  
             data.products.forEach(element => {
              //var productKeys = Object.keys(element[1]);
              let p: Product = new Product();
              p.product = element['product'];
              p.tags = element['tags'];
              p.sortOrder = element['sortorder'];
              p.class = element['class'];
              p.bullets = element['callout-bullets'];
              p.image = element['callout-image']
               this.products.push(p);
             });
          },
          err => console.error(err),
          () => {console.log("Products Loaded");
          
            this.questionsService.products = this.products;
           
            
          }
        );
        }
        this.loaded = true;
      }

      public onChange(event): void { 
        
        // If the current question is question 1 (US/Canada) load or reload the questions array
        // so that the "ECOMMERCE" question is excluded for "CANADA" or included for US
        if(event.data[0].additional["question"] == 0){
          // Reset questions just in case they've already answered any
          this.questionsService.resetQuestions();
          this.questionsService.updateQuestions(event);

          //reload the actual questions array to include/exclude any based on the answers in presquestions (1-3)
          this.loadQuestions();
        }else{
          this.questionsService.updateQuestions(event);
        }
        
      }  
    
}
