import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.setIsLoggedIn(true);
    this.router.navigateByUrl('/start-page');
  }
}