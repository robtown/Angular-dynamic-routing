import { Component, OnInit } from '@angular/core';
import { Select2OptionData, Select2TemplateFunction } from 'ng2-select2';
import { QuestionsService } from '../services/questions.service';
import { Question, SelectValue, Select2Question } from '../models/question';
import { Product } from '../models/product';
import * as $ from 'jquery';
import { Observable, of } from 'rxjs';
import { Convert, Questions, PrequestionClass } from "../models/interfaces";


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

  answeredQuestions:any = ["","","","","","","","",""];
  
  jsonQuestions: Questions;
  loaded: boolean = false;
  
  constructor(private questionsService: QuestionsService) { }
  title:any;
  ngOnInit() {
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
              this.loadQuestions();
            });
    }

    loadQuestions(){
            if(this.questionsService.question0){ 
              this.answeredQuestions[0] = this.questionsService.question0;
            }
            if(this.questionsService.question1){ 
            this.answeredQuestions[1] = this.questionsService.question1; 
          }
            if(this.questionsService.question2){ 
            this.answeredQuestions[2] = this.questionsService.question2; 
          }
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
                              icon: element.icon
                            }
                            };
                            questionForSelect2.answers.push(option);
                          });
                          this.questionsService.preQuestions.push(questionForSelect2);
                          questionIndex ++;
                    });
                  }

                  if(this.questionsService.questions.length == 0){
                    var questionIndex:any  = 3
                    this.questionsService.jsonQuestions.questions.forEach(question => {
                              let questionForSelect2 : Select2Question = new Select2Question();
      
                              questionForSelect2.question = question[0];
                              questionForSelect2.sortOrder = question[2];
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
                                this.questionsService.questions.push(questionForSelect2);
                                questionIndex ++;
                          });
                        }
      

                  this.prequestions = this.questionsService.preQuestions;
                  this.questions = this.questionsService.questions;
                  this.getProducts();
                 


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
       this.questionsService.updateQuestions(event);
      }  
    
}
