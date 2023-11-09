import { Component } from '@angular/core';
import { AppSessionService } from 'src/app/login/services/app-session.service';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent {
  users: any;

  constructor(
    private sessionService: AppSessionService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    console.log(this.sessionService.getJWTToken());
  }
  
  getUsers() {
    this.loginService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });  
    console.log(this.users);
  }
}
