import {Component , OnInit} from 'angular2/core';
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';

import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';



@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]

})

export /**
 * ProductList
 */
    class ProductListComponent implements OnInit {
        pageTitle: string = 'Beer List';
        errorMessage: string;
        listFilter: string = 'cart';
        products: IProduct[];
        
        constructor(private _productService: ProductService) {
        
        }

        ngOnInit(): void {
            // this.products = this._productService.getProducts
            this._productService.getProducts()
                .subscribe(
                products => this.products = products,
                    error => this.errorMessage = <any>error
                    )
        }
}