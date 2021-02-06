import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PasswordModule} from 'primeng/password';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'KLS';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {

      if (this.hardcodedAuthenticationService.autheticate(this.username,this.password)) {
        this.invalidLogin = false;
        this.router.navigate(['welcome',this.username]);
      } else {
        this.invalidLogin = true;
      }

  }

}
