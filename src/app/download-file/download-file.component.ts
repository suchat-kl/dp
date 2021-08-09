import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  constructor(private routeA: ActivatedRoute,private ytSv:YtServiceService,
    private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem("passLogin") === 'true')) {
      this.route.navigate(['']);
      return;
    }
    this.routeA.queryParams
    .subscribe(params => {      
      this.ytSv.setTitle(params.title);
    }
  );
  }

}
