import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.model';
import { Subject, takeUntil } from 'rxjs';
import { AppSessionService } from '../../services/app-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() error: string | null | undefined;
  destroySub = new Subject();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionService: AppSessionService
  ) { }

  ngOnInit() {

  }

  submit() {
    const payload = new Login(this.loginForm.value);
    console.log('this.loginForm.value',this.loginForm.value);
    
    console.log(payload);
    this.loginService
      .login(payload).pipe(takeUntil(this.destroySub))
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl("/finances");

        this.sessionService.setUserJWT(res);
      })
  }

  ngOnDestroy() {
    this.destroySub.next(null);
  }
}
