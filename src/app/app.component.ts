import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question, SelectValue } from './models/question';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  qs: Object;
  prequestions: any = [];
  questions: any = [];
  products: any = [];
  filterTags: any = [];
  question0: any;
  question1:any;
  question2:any;
  question3:any;
  question4:any;
  question5:any;
  question6:any;
  question7:any;
  question8:any;
  
  constructor(private questionsService: QuestionsService) { }
  title:any;
  ngOnInit() {
    // this.getQuestions();
      }

  getQuestions() {
      this.questionsService.getQuestions().subscribe(
          data => {  this.qs = data;
                this.title = data["appname"];
              data['prequestions'].forEach(prequestion => {
                  let q: Question = new Question();
                  q.question = prequestion[0];
                  var keys1 = Object.keys(prequestion[1]);
                  keys1.forEach(key=>{
                    //console.log(key + ' ' + question[1][key])
                    let nv: SelectValue = new SelectValue();
                    nv.name = prequestion[1][key].text;
                    nv.value = prequestion[1][key].value;
                    q.answers.push(nv);
                  });
                  q.sortOrder = prequestion[2];
                  this.prequestions.push(q);
                  
              });

               data['questions'].forEach(question => {
                let q: Question = new Question();
                q.question = question[0];

               

                var keys2 = Object.keys(question[1]);
                keys2.forEach(key=>{
                  //console.log(key + ' ' + question[1][key])
                  let nv: SelectValue = new SelectValue();
                  nv.name = key;
                  nv.value = question[1][key];
                  q.answers.push(nv);
                });
                q.sortOrder = question[2];
                this.questions.push(q);
                
              });

          },
          err => console.error(err),
          () => {console.log("Questions Loaded");
                  this.getProducts();
          }
        );
      }

      getProducts(){
        this.questionsService.getProducts().subscribe(
          data => {  
             data["products"].forEach(element => {
              //var productKeys = Object.keys(element[1]);
              let p: Product = new Product();
              p.product = element['product'];
              p.tags = element['tags'];
              p.sortOrder = element['sortorder'];
               this.products.push(p);
             });
          },
          err => console.error(err),
          () => {console.log("Products Loaded")
          }
        );
      }

      public onChange(event): void {  // event will give you full breif of action
        const newVal = event.target.value;
        console.log(newVal);
        let thisId = event.target.id;

        switch(thisId){

          case "select--0":
          if(newVal != "none" ){
          this.question0 = newVal;
          }else{
            this.question0 = "";
          }
          break;
          case "select--1":
          if(newVal != "none" ){
          this.question1 = newVal;
          }else{
            this.question1 = "";
          }
          break;
          case "select--2":
          if(newVal != "none" ){
          this.question2 = newVal;
          }else{
            this.question2 = "";
          }
          break;
          case "select--3":
          if(newVal != "none" ){
          this.question3 = newVal;
          }else{
            this.question3 = "";
          }
          break;
          case "select--4":
          if(newVal != "none" ){
          this.question4 = newVal;
          }else{
            this.question4 = "";
          }
          break;
          case "select--5":
          if(newVal != "none" ){
          this.question5 = newVal;
          }else{
            this.question5 = "";
          }
          break;
          case "select--6":
          if(newVal != "none" ){
          this.question6 = newVal;
          }else{
            this.question6 = "";
          }
          break;
          case "select--7":
          if(newVal != "none" ){
          this.question7 = newVal;
          }else{
            this.question7 = "";
          }
          break;
          case "select--8":
          if(newVal != "none" ){
          this.question8 = newVal;
          }else{
            this.question8 = "";
          }
          break;
        }
        //this.filterTags.push(newVal);
        this.updateFilterTags();
      }

      updateFilterTags(){
        this.filterTags.length = 0;
        if(this.question0 != null && this.question0 != "" ){
          this.filterTags.push(this.question0);
        }
        if(this.question1 != null && this.question1 != "" ){
          this.filterTags.push(this.question1);
        }
        if(this.question2 != null && this.question2 != "" ){
          this.filterTags.push(this.question2);
        }
        if(this.question3 != null && this.question3 != "" ){
          this.filterTags.push(this.question3);
        }
        if(this.question4 != null && this.question4 != "" ){
          this.filterTags.push(this.question4);
        }
        if(this.question5 != null && this.question5 != "" ){
          this.filterTags.push(this.question5);
        }
        if(this.question6 != null && this.question6 != "" ){
          this.filterTags.push(this.question6);
        }
        if(this.question7 != null && this.question7 != "" ){
          this.filterTags.push(this.question7);
        }
        if(this.question8 != null && this.question8 != "" ){
          this.filterTags.push(this.question8);
        }
      }
    
}
