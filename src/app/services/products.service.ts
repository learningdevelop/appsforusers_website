import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductsService {

  products: any[] = [];
  productsFiltered: any[] = [];
  productsLoaded = false;

  constructor(private http: Http) {
    this.loadProducts();
  }

  loadProducts() {
    this.productsLoaded = true;
    // You are using appsforusers promise template
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://employees-6fb58.firebaseio.com/products_index.json')
                .subscribe(data => {
                    // console.log(data.json());
                    this.productsLoaded = false;
                    this.products = data.json();
                    resolve();
                });
    });
    return promise;
  }

  showProduct(code: string) {
    return this.http.get(`https://employees-6fb58.firebaseio.com/products/${ code }.json`);
  }

  searchProduct(criteria: string) {

    if (this.products.length === 0) {
      this.loadProducts()
          .then(() => {
            // load finished
            this.filterProducts(criteria);
          });
    } else {
      this.filterProducts(criteria);
    }
  }

  filterProducts(criteria: string) {

    this.productsFiltered = [];
    criteria = criteria.toLowerCase();

    this.products.forEach(prod => {
      if (prod.category.indexOf(criteria) >= 0 || prod.title.toLowerCase().indexOf(criteria) >= 0) {
        this.productsFiltered.push(prod);
        // console.log(prod);
      }
      // console.log(prod);
    });
  }
}
