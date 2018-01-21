import { WebinfoService } from './../../services/webinfo.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public _aboutInfo: WebinfoService) { }

}
