import {Component } from 'angular2/core';
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';

import { ROUTER_DIRECTIVES } from 'angular2/router';




@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    directives: [StarComponent, ROUTER_DIRECTIVES]

})

export /**
 * ProductList
 */
class ProductList {
    
}