import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameConstants } from '../game-level-common/game-constants';
import { GameLevels } from '../game-level-common/game-levels';

@Component({
  imports: [RouterLink],
  selector: 'app-math-levels',
  styleUrl: './math-levels.scss',
  templateUrl: './math-levels.html',
})
export class MathLevels extends GameLevels{
  chapterName: string = GameConstants.alphChapter;
}
