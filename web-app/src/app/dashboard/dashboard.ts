import { Component } from '@angular/core';
import { Player } from '../models/player';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);

  players: Player[] = [{
    id: "1",
    name: "Tea",
    avatarId: 1,
    born: new Date(),
  }];

  getAvatarSrc(avatarId: number){
    return "images/avatar.svg";
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
