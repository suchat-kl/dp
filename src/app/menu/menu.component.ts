// import { AppRoutingModule } from '../app-routing.module';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { UsrpwdForm } from '../usrpwd-form';
import {MessageService} from 'primeng/api';
// import {MessagesModule} from 'primeng/messages';
// import {MessageModule} from 'primeng/message';

// import {MenubarModule} from 'primeng/menubar';
// `
//   :host ::ng-deep .p-password input {
//     width: 9rem;
//   }
// `
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
     :host ::ng-deep .p-password input {
       width: 9rem;
     }
   `],
// providers: [MessageService]
})
export class MenuComponent {
  // title = 'ดาวน์โหลดเอกสารภาษีประจำปี';
  // userName:any;
  // password="" ;
  
  data: any;
  constructor(private messageService: MessageService){}
  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});
}
  onclick(value: any): void {
    this.showTopCenter();
    // console.log(JSON.stringify(value));
    this.data = JSON.stringify(value);
    console.log(this.data);

    // console.log(value["userName"]);
    // console.log(value["password"]);
    let obj: UsrpwdForm = JSON.parse(this.data);
    console.log(obj.userName);
    console.log(obj.password);
  }
  items: MenuItem[] = [];

  // ngOnInit() {
  //   this.items = [{
  //       label: 'File',
  //       items: [
  //           {label: 'New', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
  //           {label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']}
  //           {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
  //       ]
  //   }

  mnuStr = [
    { "index": "ดาวน์โหลดเอกสารภาษีประจำปี" },
    { "register": "ลงทะเบียนผู้ใช้งาน" }
  ];
  ngOnInit() {
    this.items = [
      {
        label: 'หน้าแรก',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: ['/'],
        queryParams: { 'title': this.mnuStr[0]["index"] },
        // routerLinkActiveOptions: { exact: true },
        // styleClass: 'activeMnu',
        // url:'http://www.google.com'

      },
      {
        label: 'นำไฟล์ขึ้นเว็บ',
        icon: 'pi pi-upload',
        //   routerLink: ['/']
        //  items:[
        //     {
        //        label:'New',
        //        icon:'pi pi-fw pi-plus',
        //        items:[
        //           {
        //              label:'Bookmark',
        //              icon:'pi pi-fw pi-bookmark'
        //           },
        //           {
        //              label:'Video',
        //              icon:'pi pi-fw pi-video'
        //           },

        //        ]
        //     },
        //     {
        //        label:'Delete',
        //        icon:'pi pi-fw pi-trash'
        //     },
        //     {
        //        separator:true
        //     },
        //     {
        //        label:'Export',
        //        icon:'pi pi-fw pi-external-link'
        //     }
        //  ]
      },
      {
        label: 'ดาวน์โหลดไฟล์ภาษี',
        icon: 'pi pi-download',
        //   routerLink: ['/']
        //  items:[
        //     {
        //        label:'Left',
        //        icon:'pi pi-fw pi-align-left'
        //     },
        //     {
        //        label:'Right',
        //        icon:'pi pi-fw pi-align-right'
        //     },
        //     {
        //        label:'Center',
        //        icon:'pi pi-fw pi-align-center'
        //     },
        //     {
        //        label:'Justify',
        //        icon:'pi pi-fw pi-align-justify'
        //     },

        //  ]
      },
      {
        label: 'ผู้ใช้งาน',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: this.mnuStr[1]["register"],
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/register'],
            queryParams: { 'title': this.mnuStr[1]["register"] },
          },
          {
            label: 'เปลี่ยนรหัสผ่าน',
            icon: 'pi pi-fw pi-user-minus',
            //   routerLink: ['/']
          },
          {
            label: 'กำหนดรหัสผ่านใหม่',
            icon: 'pi pi-fw pi-user',
            //   routerLink: ['/']
            //  items:[
            //     {
            //        label:'Filter',
            //        icon:'pi pi-fw pi-filter',
            //        items:[
            //           {
            //              label:'Print',
            //              icon:'pi pi-fw pi-print'
            //           }
            //        ]
            //     },
            //     {
            //        icon:'pi pi-fw pi-bars',
            //        label:'List'
            //     }
            //  ]
          }
        ]
      },
      // {
      //    label:'Events',
      //    icon:'pi pi-fw pi-calendar',
      //    items:[
      //       {
      //          label:'Edit',
      //          icon:'pi pi-fw pi-pencil',
      //          items:[
      //             {
      //                label:'Save',
      //                icon:'pi pi-fw pi-calendar-plus'
      //             },
      //             {
      //                label:'Delete',
      //                icon:'pi pi-fw pi-calendar-minus'
      //             },

      //          ]
      //       },
      //       {
      //          label:'Archieve',
      //          icon:'pi pi-fw pi-calendar-times',
      //          items:[
      //             {
      //                label:'Remove',
      //                icon:'pi pi-fw pi-calendar-minus'
      //             }
      //          ]
      //       }
      //    ]
      // },
      {
        separator: true
      },
      // {
      //    label:'ออกจากระบบ',
      //    icon:'pi pi-fw pi-sign-out'

      // }
    ];
  }
}

