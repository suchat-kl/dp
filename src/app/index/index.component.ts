import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
title:string="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      // console.log(params); // { orderby: "price" }
      this.title = params.title;
      console.log(this.title); // price
    }
  );
  }

}
