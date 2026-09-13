import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  loginVisible = false;

  email: string = "";
  password: string = "";

  auth = inject(AuthService);
  router = inject(Router);

  showLogin(){
    this.loginVisible = true;
  }

  hideLogin(){
    this.loginVisible = false;
  }

  async login(){
    try{
      await this.auth.login(this.email, this.password);
      await this.router.navigate(["/dashboard"]);
    } catch(e){
      alert("Greška prijave: " + e)
    }
  }
}
