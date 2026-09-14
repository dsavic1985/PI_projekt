import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  loginVisible = signal(false);
  registrationVisible = signal(false);

  email: string = "";
  password: string = "";
  displayName: string = "";

  auth = inject(AuthService);
  router = inject(Router);

  showLogin(){
    this.loginVisible.set(true);
    this.registrationVisible.set(false);
  }

  hideLogin(){
    this.loginVisible.set(false);
    this.registrationVisible.set(false);
  }

  showRegistration(){
    this.registrationVisible.set(true);
  }

  async submitForm(form: NgForm){
    form.form.markAllAsTouched();

    if (form.valid){
      try{
        if (this.registrationVisible()){
          await this.auth.register(this.email, this.password, this.displayName);
        }
        else{
          await this.auth.login(this.email, this.password);
        }
        await this.router.navigate(["/dashboard"]);
      } catch(e){
        alert("Greška prijave: " + e)
      }
    }
    else{
      console.log("invalid login form");
    }
  }

  async loginWithGoogle(){
    await this.auth.loginWithGoogle();
  }
}
