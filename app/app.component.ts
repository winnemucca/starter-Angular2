import {Component} from 'angular2/core';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

//components

import { WelcomeComponent } from '../app/home/welcome.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true}        
])
export class AppComponent { 
        pageTitle: string = 'Calorie Intake';

}
