import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = 'init';
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }

  title = 'Finance App';
}
