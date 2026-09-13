import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GameSession } from '../models/gameSession';
import { SecondsToDurationStringPipe } from '../seconds-to-duration-string-pipe';
import { AuthService } from '../auth-service';
import { DataAccessService } from '../data-access-service';
import { DatePipe } from '@angular/common';
import { ErrorHelper } from '../error-helper';

@Component({
  imports: [RouterLink, SecondsToDurationStringPipe, DatePipe],
  selector: 'app-player-stats',
  styleUrl: './player-stats.scss',
  templateUrl: './player-stats.html',
})
export class PlayerStats {
  playerId = "";
  playerName = signal("");
  gameSessions = signal<GameSession[]>([]);

  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);
  private dataAccess = inject(DataAccessService);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['id'];
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.playerId){
      try{
        const player = await this.dataAccess.getPlayer(this.playerId);
        if (player){
          this.playerName.set(player.name);
          const sessions = await this.dataAccess.getSessions(this.playerId);
          this.gameSessions.set(sessions);
        }
        else{
          await this.router.navigate(['/dashboard']);
        }
      }
      catch(e){
        alert(ErrorHelper.getMessage(e));
        await this.router.navigate(['/dashboard']);
      }
    }
    else{
      await this.router.navigate(['/dashboard']);
    }
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
