import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ytSv:YtServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {      
      this.ytSv.setTitle(params.title);
    }
  );
  }

}
