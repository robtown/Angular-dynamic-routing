import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';
import { FullAnswer } from '../models/question';

@Component({
    selector: 'about2',
    templateUrl: '../views/_results.html'
  })
  export class Results implements OnInit{
    constructor(private questionsService: QuestionsService, private router: Router) { }
        loaded: boolean = true;
        products: any;
        results: Array<FullAnswer> = [];
        
      ngOnInit(){
      let self = this;
   
          this.products = this.questionsService.products;
        
          this.results = this.questionsService.fullAnswers;
        
      
    }
     public onClick(event): void {
       console.log(event.currentTarget.value);
       this.questionsService.question8 = event.currentTarget.value;
       this.questionsService.updateQuestions(event);
     }
    public onChange(event): void { 
      this.questionsService.updateQuestions(event);
     }  
   }