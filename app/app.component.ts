import { Component } from 'angular2/core';
import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// imported components
import { WelcomeComponent} from './home/welcome.component';

//components

// import { WelcomeComponent } from '../app/home/welcome.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // initially did not have welcomeComponent and it still worked ???????
    directives: [ROUTER_DIRECTIVES, WelcomeComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent }        
])
export class AppComponent { 
    pageTitle: string = 'Calorie Intake';

    constructor () {}

}
