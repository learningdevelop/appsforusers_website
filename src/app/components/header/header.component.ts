import { Component } from '@angular/core';
import { WebinfoService } from '../../services/webinfo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(public _webinfo: WebinfoService,
                private router: Router) {

    }

    searchProduct(criteria: string, ) {
      // console.log(criteria);
      this.router.navigate(['search', criteria]);
    }

}
