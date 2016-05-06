import { Component } from 'angular2/core';
import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// imported components
import { WelcomeComponent} from './home/welcome.component';
import { DashboardComponent} from './dashboard/dashboard.component';

import {ProductListComponent} from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

//services 
import { ProductService} from './products/product.service';


//components

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // initially did not have welcomeComponent and it still worked ???????
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ProductService, HTTP_PROVIDERS]
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault:true },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetailComponent', component: ProductDetailComponent }
])
export class AppComponent { 
    pageTitle: string = 'Calorie Intake';

    constructor () {}

}
