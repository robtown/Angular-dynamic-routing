import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';    
import {Location} from "@angular/common";

@Component({
  selector: 'about',
  templateUrl: '../views/_question1.html'
})
export class Question1 implements OnInit{
  
  constructor(private questionsService: QuestionsService, private router: Router, private location: Location) { }
      loaded: boolean = false;
     
      question4 = this.questionsService.question3;
    ngOnInit(){

    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.questions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

  }
   public onClick(event): void {
     console.log(event.currentTarget.value);
     this.questionsService.question3 = event.currentTarget.value;
     this.questionsService.updateQuestions(event);
   }
  public onChange(event): void { 
    this.questionsService.updateQuestions(event);
   }  
 }

@Component({
  selector: 'about2',
  templateUrl: '../views/_question2.html'
})
export class Question2 implements OnInit{
  constructor(private questionsService: QuestionsService, private router: Router) { }
      loaded: boolean = false;
     
      // Disparate numbering due to array indexing in service...
      question5 = this.questionsService.question4;
    ngOnInit(){
    
    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.jsonQuestions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

  }
   public onClick(event): void {
     console.log(event.currentTarget.value);
     this.questionsService.question4 = event.currentTarget.value;
     this.questionsService.updateQuestions(event);
   }
  public onChange(event): void { 
    this.questionsService.updateQuestions(event);
   }  
 }

 @Component({
  selector: 'about2',
  templateUrl: '../views/_question3.html'
})
export class Question3 implements OnInit{
  constructor(private questionsService: QuestionsService, private router: Router) { }
      loaded: boolean = false;
     
      // Disparate numbering due to array indexing in service...
      question6 = this.questionsService.question5;
    ngOnInit(){
    
    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.jsonQuestions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

  }
   public onClick(event): void {
     console.log(event.currentTarget.value);
     this.questionsService.question5 = event.currentTarget.value;
     this.questionsService.updateQuestions(event);
   }
  public onChange(event): void { 
    this.questionsService.updateQuestions(event);
   }  
 }

 @Component({
  selector: 'about2',
  templateUrl: '../views/_question4.html'
})
export class Question4 implements OnInit{
  constructor(private questionsService: QuestionsService, private router: Router) { }
      loaded: boolean = false;
     
      // Disparate numbering due to array indexing in service...
      question7 = this.questionsService.question6;
    ngOnInit(){
    
    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.jsonQuestions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

  }
   public onClick(event): void {
     console.log(event.currentTarget.value);
     this.questionsService.question6 = event.currentTarget.value;
     this.questionsService.updateQuestions(event);
   }
  public onChange(event): void { 
    this.questionsService.updateQuestions(event);
   }  
 }

 @Component({
  selector: 'about2',
  templateUrl: '../views/_question5.html'
})
export class Question5 implements OnInit{
  constructor(private questionsService: QuestionsService, private router: Router) { }
      loaded: boolean = false;
     
      // Disparate numbering due to array indexing in service...
      question8 = this.questionsService.question7;
    ngOnInit(){
    
    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.jsonQuestions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

  }
   public onClick(event): void {
     console.log(event.currentTarget.value);
     this.questionsService.question7 = event.currentTarget.value;
     this.questionsService.updateQuestions(event);
   }
  public onChange(event): void { 
    this.questionsService.updateQuestions(event);
   }  
 }

 @Component({
  selector: 'about2',
  templateUrl: '../views/_question6.html'
})
export class Question6 implements OnInit{
  constructor(private questionsService: QuestionsService, private router: Router) { }
      loaded: boolean = false;
     
      // Disparate numbering due to array indexing in service...
      question9 = this.questionsService.question8;
    ngOnInit(){
    
    if(this.questionsService.questions.length > 0){
    console.log(this.questionsService.selectedProducts);
    console.log(this.questionsService.jsonQuestions);
      this.loaded = true;
    } else{
      this.router.navigateByUrl('/');
    }

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