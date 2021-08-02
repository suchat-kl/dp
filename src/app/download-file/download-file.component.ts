import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ytSv:YtServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {      
      this.ytSv.setTitle(params.title);
    }
  );
  }

}
