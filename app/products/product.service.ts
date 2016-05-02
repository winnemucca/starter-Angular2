import { Injectable } from 'angular2/core';
import { IProduct } from './product';

import {Http, Response} from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ProductService {
    private _productUrl = '/api/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('all: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}