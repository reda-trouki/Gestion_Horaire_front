import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../services/auth/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected email = '';
  protected password = '';
  token: Object = new Observable<string>();
  constructor(private authService : AuthService) {
  }
  authenticate() {
    this.authService.login({email: this.email, password: this.password});
  }
}
