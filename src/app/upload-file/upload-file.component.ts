
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { concat } from 'rxjs';


import { YtServiceService } from '../yt-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  disableInsert: boolean = true;
  disableDelete: boolean = true;
  //disableUpdate: boolean = true;
  // sizeMax = false;
  // isTxt = false;
  sizeMaxFile = 5;
  display: boolean = false; msg_err: string = "";
  jsonOutput: {
    xx: string; a: string; b: string; c: string; d: string;
    e: string; f: string; g: string; h: string; i: string; j: string; k: string; l: string;
    m: string; n: string; o: string; p: string; q: string; r: string; s: string;
  } = {
      "xx": "", "a": "", "b": "", "c": "", "d": "", "e": "", "f": "", "g": "",
      "h": "", "i": "", "j": "", "k": "",
      "l": "", "m": "", "n": "",
      "o": "", "p": "", "q": "", "r": "", "s": ""
    };
  jsonOutputArr: {
    xx: string; a: string; b: string; c: string; d: string;
    e: string; f: string; g: string; h: string; i: string; j: string; k: string; l: string;
    m: string; n: string; o: string; p: string; q: string; r: string; s: string;
  }[] = [];
  //   form: FormGroup = new FormGroup({
  //     title: new FormControl(''),
  //     description: new FormControl('')
  // })
  constructor(private routeA: ActivatedRoute, private ytSv: YtServiceService,
    private route: Router, private http: HttpClient
  ) { }
  base64: any; //dateNum: String = "";
  fileName: string = ""; yearTax: string = ""; fileSize: string = "";
  //fileGloblal: File | undefined;
  // maxSize=5*1024*1024;
  onChange = (event: Event) => {
    //let FS = require('fs');
    let dStr = "";
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.display = false;
    //  this.fileGloblal = file;
    this.fileName = file.name;
    this.disableInsert = true;
    this.disableDelete = true;
    //console.log(file.type.toString());
    if (!(file.type.toString() == "text/plain")) {
      // alert("ต้องเลือกไฟล์ข้อความเท่านั้น");
      this.display = true; this.msg_err = "ต้องเลือกไฟล์ข้อความเท่านั้น";
      return;
    }
    let fname: string = "tax".concat(this.yearTax).concat(".txt");
    if (!(file.name == fname)) {
      //alert("ต้องใช้ชื่อไฟล์:  " + fname);
      this.display = true; this.msg_err = "ต้องใช้ชื่อไฟล์:  " + fname;
      return;
    }
    // console.log(file.name);
    // console.log(this.fileName.substr(-3).toLowerCase());
    // this.isTxt = true;
    if (!(this.fileName.substr(-3).toLowerCase() === "txt")) {
      //  this.isTxt = false;
      // alert("ต้องเลือกไฟล์ข้อความเท่านั้นนามสกุล txt");
      this.display = true; this.msg_err = "ต้องเลือกไฟล์ข้อความเท่านั้นนามสกุล txt";
      return;
    }
    let fs = file.size / 1024 / 1024;
    // this.sizeMax = false;
    if (fs > this.sizeMaxFile) {
      //this.form.validator.
      //this.sizeMax = true;
      // alert("ขนาดเกิน 5 MB");
      this.display = true; this.msg_err = "ขนาดเกิน 5 MB";
      return;
    }
    let s = (fs).toFixed(2).toString().concat(" MB");
    this.fileSize = "ขนาด " + s;
    let reader = new FileReader();
    // reader.readAsDataURL(file);

    reader.readAsText(file);
    // let text = FS.readFileSync(file, 'utf-8');
    // let textByLine = text.split('\n')

    reader.onload = () => {
      //reader.readAsText(file);
      this.base64 = reader.result;
      let data: any;
      for (const line of this.base64.split(/[\r\n]+/)) {
        data = line.split("$");
        if (data[10] == null || typeof data[10] === 'undefined') { //yearTax
          continue;
        }
        if (data[16] == null || typeof data[16] === 'undefined' || data[16] == "" || ((data[16] != "1") && (data[16] != "2"))) { //กบข กสจ or Not
          data[16] = "0";
        }
        if (sessionStorage.getItem("dStr") == null) {
          // this.dateNum = data[19];
          sessionStorage.setItem("dStr", data[19]);
          dStr = this.updateDateStr();
          // alert("one");
          //console.log(data[19]);
        }
        // console.log(data); .push
        this.jsonOutputArr.push({
          "xx": data[5], "a": data[0], "b": data[1], "c": data[2],
          "d": data[3], "e": data[4], "f": data[6], "g": data[7], "h": data[8],
          "i": data[9], "j": data[10], "k": data[11], "l": data[12], "m": data[13],
          "n": data[14], "o": data[15], "p": data[16], "q": data[17], "r": data[18],
          "s": dStr
        });

        // break;
        // console.log(data[6]);
        // console.log(JSON.stringify(data));
      }
      // console.log((this.jsonOutput));
      this.disableDelete = false;
    };
    //console.log(this.dateNum);
    //this.updateDateStr();
    sessionStorage.removeItem("dStr");

  };
  updateDateStr() {
    let monthStr =
      [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฏาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พศจิกายน",
        "ธันวาคม"
      ];

    // let i:number=0;
    // i=Number(this.dateNum.substring(2,4));
    let s = sessionStorage.getItem("dStr") + "";

    let key: any = Number(s.substring(2, 4));
    // if (key===6){
    //   alert(key);
    // }
    // console.log(s);
    // console.log(key);
    //console.log(this.jsonOutputArr[0]["s"]);
    let x = monthStr[key - 1]

    // console.log(x);



    //monthStr[6][this.dateNum.substring(2,4)]
    //console.log(key);
    let dStr = s.substring(0, 2) + " /  " + x + "  / " + s.substring(4);

    return dStr;


  }
  async onclick(value: any) {
    // let data = JSON.stringify(value);
    // console.log(data);
    // "fileName": this.yearTax,
    // "base64": this.base64,
    // "yeartax": this.yearTax,
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer " + sessionStorage.getItem("token"))
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')   
      // .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Credentials', 'true')     
      // .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
      // .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")


    }
    if (!this.disableDelete) {
      let url =this.ytSv.url+ "/delYT/" + this.yearTax;//+"?file="+this.fileGloblal;



      // console.log(body);



      try {
        await this.http.delete(url, header).toPromise().
          then(response => {
            // let j = JSON.stringify(response);
            // let obj2: LoginApi = JSON.parse(j);
            // console.log(response);
            // console.log("success");
            this.display = true; this.msg_err = "ลบข้อมูลเสร็จแล้ว....";
            this.disableDelete = true;
            this.disableInsert = false;

          });

      }
      catch (err) {

        // this.display = true;
        console.log("error");
        console.log(err);

      }

      return;
    } //delete



    if (!this.disableInsert) {
      // console.log(body);
      let url = this.ytSv.url+"/insertTxt";

      for (let i = 0; i < this.jsonOutputArr.length; i++) {
        this.jsonOutput = this.jsonOutputArr[i];
        let body = this.jsonOutput;
        try {//,header
          await this.http.post(url, body).toPromise().
            then(response => {
              // let j = JSON.stringify(response);
              // let obj2: LoginApi = JSON.parse(j);
              // console.log(response);
              // console.log("success");
              //this.route.navigate(['']);
              // this.disableUpdate = false;

              this.disableInsert = true;
              this.disableDelete = true;

            });

        }
        catch (err) {

          // this.display = true;
          console.log("error");
          console.log(err);

        }


      }//for
      this.disableInsert = true;
      this.disableDelete = true;
      this.display = true; this.msg_err = "เพิ่มข้อมูลจากไฟล์ข้อความเสร็จแล้ว....";
      return;
    }//insert
    // document.getElementById("file-id").files[0].name; 
    // let obj: UsrpwdForm = JSON.parse(this.data);
    //{"filetxt":"C:\\fakepath\\หนังสือรับรองภาษี 2563_New.txt"}
    // if (!this.disableUpdate) {
    //   this.updateDateStr();
    //   this.display = true; this.msg_err = "ปรับปรุงข้อมูลจากไฟล์ข้อความเสร็จแล้ว....";
    //   this.disableUpdate = true;
    // }

  }


  ngOnInit(): void {
    if (!(sessionStorage.getItem("passLogin") === 'true')) {
      this.route.navigate(['']);
      return;
    }
    this.yearTax = (new Date().getFullYear() + 543 - 1).toString();
    this.routeA.queryParams
      .subscribe(params => {
        this.ytSv.setTitle(params.title);
      }
      );
  }

}
