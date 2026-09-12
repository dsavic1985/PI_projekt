import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PlayerInfo } from './player-info/player-info';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'player-info', component: PlayerInfo },
  { path: 'player-info/:id', component: PlayerInfo },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
