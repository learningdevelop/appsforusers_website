import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WebinfoService {

  info: any = {};
  employees: any[] = [];
  showInfo = false;
  showAboutTeam = false;

  constructor(private http: Http) {
    this.loadWebInfo();
    this.loadAboutTeam();
  }

  public loadWebInfo() {
    this.http.get('assets/data/info.web.json')
            .subscribe(data => {
              // console.log(data.json());
              this.showInfo = true;
              this.info = data.json();
            });
  }

  loadAboutTeam() {
    this.http.get('https://employees-6fb58.firebaseio.com/team.json')
            .subscribe(data => {
              // console.log(data.json());
              this.showAboutTeam = true;
              this.employees = data.json();
            });
  }


}
