import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {
  // disableInsert: boolean = true;
  yearTax: string = "";
  display: boolean = false; msg_err: string = "";
  async onclick(value: any) {
    let body = { "id": sessionStorage.getItem("id") };
    let url = "http://dbdoh.doh.go.th:9999/repYT/" + body["id"] + "?yt=" + this.yearTax;


    let header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer " + sessionStorage.getItem("token"))
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')   
      // .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      // .set('Access-Control-Allow-Credentials', 'true')     
      // .set( 'POST', 'DELETE')
    }
    // console.log(body);



    try {
      await this.http.get(url, header).toPromise().
        then(response => {
          // let j = JSON.stringify(response);
          // let obj2: LoginApi = JSON.parse(j);
          console.log(response);
          // console.log("success");
          //downloadFile
         window.open("http://dbdoh.doh.go.th:9999/downloadRep/"+body["id"],"_blank");

        });

    }
    catch (err) {

      // this.display = true;
      console.log("error");
      console.log(err);

    }

   
  }
  constructor(private routeA: ActivatedRoute, private ytSv: YtServiceService,
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

    this.yearTax = (new Date().getFullYear() + 543 - 1).toString();
  }

}
