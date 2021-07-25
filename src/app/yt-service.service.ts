import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute,RouterModule, Routes } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class YtServiceService {
  // private route: ActivatedRoute,
  constructor(private titleService:Title) { }
  // title:string="";
 setTitle(title:string):void{
  // this.route.queryParams
  // .subscribe(params => {
  //   // console.log(params); // { orderby: "price" }
  //   this.title = params.title;
  //   console.log(this.title); // price
    this.titleService.setTitle(title);
}
 
}
