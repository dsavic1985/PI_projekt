import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataAccessService } from '../data-access-service';
import { GameConstants } from '../game-level-common/game-constants';

@Component({
  imports: [RouterLink],
  selector: 'app-math-levels',
  styleUrl: './math-levels.scss',
  templateUrl: './math-levels.html',
})
export class MathLevels implements OnInit{
  playerId = "";
  highestLevel = signal(0);
  private activatedRoute = inject(ActivatedRoute);
  private dataAccess = inject(DataAccessService);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['playerId'];
    });
  }
  
  async ngOnInit(): Promise<void> {
    const sessions = await this.dataAccess.getSessions(this.playerId);
    const levels = sessions
      .filter(x => x.chapter == GameConstants.mathChapter)
      .map(x => x.level);
    const highestLevel = Math.max(...levels);
    this.highestLevel.set(highestLevel);    
  }
}
