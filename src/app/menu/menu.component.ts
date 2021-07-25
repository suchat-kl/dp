// import { AppRoutingModule } from '../app-routing.module';
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
// import {MenubarModule} from 'primeng/menubar';
 // `
    //   :host ::ng-deep .p-password input {
    //     width: 9rem;
    //   }
    // `
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ `
     :host ::ng-deep .p-password input {
       width: 9rem;
     }
   `]
})
export class MenuComponent {
  title = 'ดาวน์โหลดเอกสารภาษีประจำปี';
  userName="";
  password="" ;

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


  ngOnInit() {
    this.items = [
      {
        label:'หน้าแรก',
        icon:'pi pi-fw pi-bookmark',
        routerLink: ['/'] , 
        queryParams: {'title': 'index'}
        // url:'http://www.google.com'
        // "routerLink": "['']"
      },
        {
           label:'นำไฟล์ขึ้นเว็บ',
           icon:'pi pi-upload',
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
           label:'ดาวน์โหลดไฟล์ภาษี',
           icon:'pi pi-download',
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
           label:'ผู้ใช้งาน',
           icon:'pi pi-fw pi-user',
           items:[
              {
                 label:'ลงทะเบียนผู้ใช้งาน',
                 icon:'pi pi-fw pi-user-plus',
                 routerLink: ['/register']
              },
              {
                 label:'เปลี่ยนรหัสผ่าน',
                 icon:'pi pi-fw pi-user-minus',
               //   routerLink: ['/']
              },
              {
                 label:'กำหนดรหัสผ่านใหม่',
                 icon:'pi pi-fw pi-user',
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
           separator:true
        },
        // {
        //    label:'ออกจากระบบ',
        //    icon:'pi pi-fw pi-sign-out'
           
        // }
    ];
}
}

