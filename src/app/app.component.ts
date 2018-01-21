import { Component } from '@angular/core';
import { WebinfoService } from './services/webinfo.service';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public _webinfoService: WebinfoService,
              public _productsService:ProductsService){

  }
}
