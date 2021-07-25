import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule, Routes } from '@angular/router';
import {YtServiceService} from '../yt-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ytSv:YtServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {      
      this.ytSv.setTitle(params.title);
    }
  );
  }
}
