import { Component } from '@angular/core';
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

  showLogin(){
    this.loginVisible = true;
  }

  hideLogin(){
    this.loginVisible = false;
  }

  login(){
    
  }
}
