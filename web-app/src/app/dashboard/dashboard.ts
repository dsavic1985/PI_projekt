import { Component, inject, OnInit, signal } from '@angular/core';
import { Player } from '../models/player';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth-service';
import { DataAccessService } from '../data-access-service';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit{
  private auth = inject(AuthService);
  private router = inject(Router);
  private dataAccess = inject(DataAccessService);

  players = signal<Player[]>([]);

  async ngOnInit(): Promise<void> {
    const players = await this.dataAccess.getPlayers();
    this.players.set(players);
  }

  getAvatarSrc(avatarId: number){
    return "images/avatar.svg";
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
