import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { FinancesComponent } from './finances/components/finances/finances.component';
import { CreateAccountComponent } from './login/components/create-account/create-account.component';

const routes: Routes = [
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'finances',
    component: FinancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
