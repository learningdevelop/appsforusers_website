import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  product: any = undefined;
  code: string = undefined;

  constructor(private route: ActivatedRoute,
              private _productService: ProductsService) {
    route.params.subscribe( params => {
      // console.log(params);
      // console.log(params['id']);
      _productService.showProduct(params['id'])
                      .subscribe( resp => {
                        this.code = params['id'];
                        this.product = resp.json();
                        console.log(this.product);
                      });
    });
  }

}
