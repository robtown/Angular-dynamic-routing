import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { NavigationService } from './services/navigation.service';

import { routerTransition, routerTransition2, routerTransition3 } from './app-routing/router.animations';
import { routerTransition4 } from './app-routing/animations';

type Orientation = ( "prev" | "next" | "none" );
//declare var showBack: any;

@Component({
  selector: 'app-root',
  animations: [ routerTransition4(), routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  constructor(private questionsService: QuestionsService, private navigationService: NavigationService) { }
    qs: any = this.questionsService;
    pageState: any = this.qs.orientation;
    //showBack: any = this.navigationService.animationValue != 0;
    

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
