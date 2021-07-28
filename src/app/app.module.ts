import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';
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
// import {Title} from "@angular/platform-browser";
import {YtServiceService} from './yt-service.service';
// import {ToastModule} from 'primeng/toast';
// import {MessageService} from 'primeng/api';
// import {MessagesModule} from 'primeng/messages';
// import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    RegisterComponent,
    FooterComponent
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
    // ToastModule,
    // MessageService,
    // MessagesModule,
    // MessageModule,
  ],
  providers: [YtServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 // constructor(ytSv:YtServiceService){}
 }
