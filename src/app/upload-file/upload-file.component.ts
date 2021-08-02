import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ytSv:YtServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {      
      this.ytSv.setTitle(params.title);
    }
  );
  }

}
