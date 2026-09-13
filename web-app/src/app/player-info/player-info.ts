import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Player } from '../models/player';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-player-info',
  styleUrl: './player-info.scss',
  templateUrl: './player-info.html',
})
export class PlayerInfo {
  playerId = "";
  player: Player = new Player();

  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);

  deletePopupVisible = false;

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['id'];
    });
  }

  showDelete(){
    this.deletePopupVisible = true;
  }

  hideDelete(){
    this.deletePopupVisible = false;
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
