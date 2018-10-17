import { Component } from '@angular/core';
import { QuestionsService } from './services/questions.service';

import { routerTransition } from './app-routing/router.animations';



@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  constructor(private questionsService: QuestionsService) { }
 
      getState(outlet) {
        return outlet.activatedRouteData.state;
      }
      getIcon(){
        console.log("get icon");
      }
}
