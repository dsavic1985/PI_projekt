import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameSession } from '../models/gameSession';
import { SecondsToDurationStringPipe } from '../seconds-to-duration-string-pipe';
import { Player } from '../models/player';

@Component({
  imports: [RouterLink, SecondsToDurationStringPipe],
  selector: 'app-player-stats',
  styleUrl: './player-stats.scss',
  templateUrl: './player-stats.html',
})
export class PlayerStats {
  playerId = "";
  player: Player = {
    name: "Tea",
    avatarId: 1,
    born: new Date(),
    id: ""
  };
  gameSessions: GameSession[] = [];
  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['id'];
    });
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
