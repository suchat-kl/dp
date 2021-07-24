import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '/register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
