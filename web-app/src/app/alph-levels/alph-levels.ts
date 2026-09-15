import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameConstants } from '../game-level-common/game-constants';
import { GameLevels } from '../game-level-common/game-levels';

@Component({
  imports: [RouterLink],
  selector: 'app-alph-levels',
  styleUrl: './alph-levels.scss',
  templateUrl: './alph-levels.html',
})
export class AlphLevels extends GameLevels{
  chapterName: string = GameConstants.alphChapter;
}
