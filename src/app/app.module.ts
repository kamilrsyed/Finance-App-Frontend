import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FinancesModule } from './finances/finances.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { FinancesComponent } from './finances/components/finances/finances.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FinancesModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'finances', component: FinancesComponent }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, FinancesComponent]
})
export class AppModule { }
