import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { ProductService } from './product.service';
import { IProduct } from './product';


@Component({
    templateUrl: './product-detail.component.html',
    styleUrls:[ './product-detail.component.css']
})

export /**
 * ProductDetailComponent
 */
class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Beer List details';
    product: IProduct;
    errorMessage: string;


    ngOnInit() {
        if (!this.product) {
          //  let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            //this.getProduct(id);
        }
    }    

    getProducts(id: number) {
        return;
    }

}