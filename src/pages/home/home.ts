import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import "rxjs/add/operator/map";

import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sitesList$;
  constructor(private http: Http, public navCtrl: NavController) {
    this.sitesList$ = this.http
    .get("https://api.myjson.com/bins/4kwpm")
    .map(data => data.json());
  }

}
