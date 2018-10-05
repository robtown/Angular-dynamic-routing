import { Injectable } from '@angular/core';
import { Question } from './models/question';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


const httpOptions = {
 // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public getQuestions() { 
     return this.http.get("./assets/data/evn-questions.json");
   }

   public getProducts() { 
    return this.http.get("./assets/data/evn-product-tags.json");
  }
}
