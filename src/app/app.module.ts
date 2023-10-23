import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FinancesModule } from './finances/finances.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { FinancesComponent } from './finances/components/finances/finances.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FinancesModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'finances', component: FinancesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
