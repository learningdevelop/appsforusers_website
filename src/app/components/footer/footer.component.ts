import { Component } from '@angular/core';
import { WebinfoService } from '../../services/webinfo.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor(public _webinfo: WebinfoService) { }


}
