import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  constructor(private router: Router, private auth: AuthService) {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']).then();
  }
}
