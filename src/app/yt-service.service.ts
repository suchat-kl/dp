import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
//import { ActivatedRoute,RouterModule, Routes } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class YtServiceService {
  // private route: ActivatedRoute,
  constructor(private titleService: Title) { }
  // title:string="";
  private _url = 'http://backupdoh.doh.go.th:9999'; //develop dbdoh production backup
  public get url() {
    return this._url;
  }
  // public set url(value) {
  //   this._url = value;
  // }

  setTitle(title: string): void {
    // this.route.queryParams
    // .subscribe(params => {
    //   // console.log(params); // { orderby: "price" }
    //   this.title = params.title;
    //   console.log(this.title); // price
    this.titleService.setTitle(title);
  }

}
