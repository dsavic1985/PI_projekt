import { Component } from '@angular/core';
import { Player } from '../models/player';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {

  players: Player[] = [{
    id: "1",
    name: "Tea",
    avatarId: 1,
    born: new Date(),
  }];

  getAvatarSrc(avatarId: number){
    return "images/avatar.svg";
  }

  logout(){
  }
}
