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
        loaded: boolean = false;
        products: any;
        results: Array<FullAnswer> = [];
        selected: any;
        selectedClass: string;
        main_image: any;

        showFootNotes: boolean = false;
        
      ngOnInit(){
      let self = this;
          this.selected = this.questionsService.headerIcon;
          this.products = this.questionsService.products;

          this.selected = this.questionsService.headerIconText;
          // Create a class name for for the main image
          if(this.selected != undefined && this.selected != ""){
              this.selectedClass = this.selected.toLowerCase();
              this.selectedClass = this.selectedClass.replace(/\s/g, "-").replace(/\//g, "-");
              this.main_image = this.questionsService.headerResultImage;
          }
        
          this.results = this.questionsService.fullAnswers;

          if(this.questionsService.questions.length > 0){
            //console.log(this.questionsService.selectedProducts);
            //console.log(this.questionsService.jsonQuestions);
              this.loaded = true;
            } else{
              this.router.navigateByUrl('/');
            }
        
      
    }
    public startOver(event): void {
       this.questionsService.resetQuestions();
       this.questionsService.resetPreQuestions();
       this.router.navigateByUrl('/');
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