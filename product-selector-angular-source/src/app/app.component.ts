import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { NavigationService } from './services/navigation.service';

import { routerTransition, routerTransition2, routerTransition3 } from './app-routing/router.animations';
import { routerTransition4 } from './app-routing/animations';

import { Question1, Question2 } from './components/app.question1';

import { Router } from '@angular/router';

type Orientation = ( "prev" | "next" | "none" );
//declare var showBack: any;

@Component({
  selector: 'app-root',
  animations: [ routerTransition4(), routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  links: Array<{ text: string, path: string }> = [];

  constructor(private questionsService: QuestionsService, private navigationService: NavigationService, private router: Router) { }
    qs: any = this.questionsService;
    pageState: any = this.qs.orientation;
    //showBack: any = this.navigationService.animationValue != 0;
    
      ngOnInit(){
        // this.router.config.unshift(
        //   { path: 'foo', component: Question1, data: { state: 'Q1', num: 1 } },
        //   { path: 'bar', component: Question2, data: { state: 'Q2', num: 1 } }
        // );
      }
      getState(outlet) {
       // this.showBack = outlet.activatedRouteData.num != 0;

        return outlet.activatedRouteData.state;
      }
      getIcon(){
        console.log("get icon");
      }

      getRouteAnimation(outlet) {
        console.log('lastValue', this.navigationService.lastValue);
        console.log('newValue', this.navigationService.newValue);
        console.log('result', this.navigationService.animationValue);
       // this.showBack = outlet.activatedRouteData.num != 0;
        return this.navigationService.animationValue;
      }
}
