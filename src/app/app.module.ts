import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';     //accordion and accordion tab
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
