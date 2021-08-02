import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
// import {Title} from "@angular/platform-browser";
import { YtServiceService } from '../yt-service.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // title:string="";
  // private titleService:Title
  constructor(private route: ActivatedRoute, private ytSv: YtServiceService) { }
// token:string="";
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params); // { orderby: "price" }
        // this.title = params.title;
        // console.log(this.title); // price
        //this.titleService.setTitle(this.title);

        if (params.title == null) {
          this.ytSv.setTitle("ดาวน์โหลดเอกสารภาษีประจำปี");
        }
        else { this.ytSv.setTitle(params.title); }
      }
      );
    // if (!sessionStorage.getItem("token")==null){
        
          // this.token= (localStorage.getItem('token') || '') ;
          // console.log(this.token);
   //  }
  }

}
