import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
 
  { path: 'uploadfile', component: UploadFileComponent },
  { path: 'downloadfile', component: DownloadFileComponent },
  { path: 'changepwd', component: ChangePwdComponent },
  { path: 'resetpwd', component: ResetPwdComponent },
  { path: '**', component: IndexComponent }, //this is last line only
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
