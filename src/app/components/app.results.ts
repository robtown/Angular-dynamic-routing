import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'about2',
    templateUrl: '../views/_results.html'
  })
  export class Results implements OnInit{
    constructor(private questionsService: QuestionsService, private router: Router) { }
        loaded: boolean = true;
        products: any;
        
      ngOnInit(){
      
    //   if(this.questionsService.questions.length > 0){
    //   console.log(this.questionsService.selectedProducts);
    //   console.log(this.questionsService.jsonQuestions);
    //     this.loaded = true;
    //   } else{
    //     this.router.navigateByUrl('/');
    //   }
        this.products = this.questionsService.products;
        var test = this.questionsService.getQuestionAnswers(3);
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