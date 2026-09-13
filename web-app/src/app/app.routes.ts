import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PlayerInfo } from './player-info/player-info';
import { PlayerStats } from './player-stats/player-stats';
import { Chapters } from './chapters/chapters';
import { MathLevels } from './math-levels/math-levels';
import { AlphLevels } from './alph-levels/alph-levels';
import { Math1 } from './math-levels/math-1/math-1';
import { Alph1 } from './alph-levels/alph-1/alph-1';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'player-info', component: PlayerInfo },
  { path: 'player-info/:id', component: PlayerInfo },
  { path: 'player-stats/:id', component: PlayerStats },
  { path: 'chapters/:playerId', component: Chapters},
  { path: 'math-levels/:playerId', component: MathLevels },
  { path: 'math-levels/math-1/:playerId', component: Math1 },
  { path: 'alph-levels/:playerId', component: AlphLevels },
  { path: 'alph-levels/alph-1/:playerId', component: Alph1 },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
