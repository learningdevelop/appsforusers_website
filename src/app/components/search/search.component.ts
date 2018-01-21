import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  criteria: string = undefined;

  constructor(private route: ActivatedRoute,
              public _prodServices: ProductsService) {
    route.params.subscribe( params => {
      this.criteria = params['criteria'];
      // console.log(this.criteria);
      _prodServices.searchProduct(this.criteria);
    });
  }

}
