import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  onContinue(): void{
    this.router.navigateByUrl('immoLocataire');
  }

  onLogin(): void{
    this.auth.login();
    this.router.navigateByUrl('immoLocataire');
  }
}
