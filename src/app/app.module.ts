import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';


import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';

import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';     //accordion and accordion tab
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './user.service';
import {YtServiceService} from './yt-service.service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    RegisterComponent,
    FooterComponent,
    UploadFileComponent,
    DownloadFileComponent,
    ChangePwdComponent,
    ResetPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    AccordionModule,
    FontAwesomeModule,
    HttpClientModule,
    DialogModule,
    
  ],
  providers: [YtServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
 // constructor(ytSv:YtServiceService){}
 }
