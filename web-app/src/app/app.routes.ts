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
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'player-info', component: PlayerInfo, canActivate: [authGuard] },
  { path: 'player-info/:id', component: PlayerInfo, canActivate: [authGuard] },
  { path: 'player-stats/:id', component: PlayerStats, canActivate: [authGuard] },
  { path: 'chapters/:playerId', component: Chapters, canActivate: [authGuard] },
  { path: 'math-levels/:playerId', component: MathLevels, canActivate: [authGuard] },
  { path: 'math-levels/math-1/:playerId', component: Math1, canActivate: [authGuard] },
  { path: 'alph-levels/:playerId', component: AlphLevels, canActivate: [authGuard] },
  { path: 'alph-levels/alph-1/:playerId', component: Alph1, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
