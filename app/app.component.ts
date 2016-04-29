import { Component } from 'angular2/core';
import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// imported components
import { WelcomeComponent} from './home/welcome.component';
import { DashboardComponent} from './dashboard/dashboard.component';


//components

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // initially did not have welcomeComponent and it still worked ???????
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault:true },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent}        
])
export class AppComponent { 
    pageTitle: string = 'Calorie Intake';

    constructor () {}

}
