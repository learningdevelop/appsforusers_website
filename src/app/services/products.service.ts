import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductsService {

  products: any[] = [];
  productsLoaded = false;

  constructor(private http: Http) {
    this.loadProducts();
  }

  loadProducts() {
    this.productsLoaded = true;
      this.http.get('https://employees-6fb58.firebaseio.com/products_index.json')
                .subscribe(data => {
                    // console.log(data.json());
                    this.productsLoaded = false;
                    this.products = data.json();
                });
  }

  showProduct(code: string) {
    return this.http.get(`https://employees-6fb58.firebaseio.com/products/${ code }.json`);
  }
}
