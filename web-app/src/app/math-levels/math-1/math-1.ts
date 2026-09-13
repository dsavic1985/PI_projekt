import { Component, signal } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { GameLevel } from '../../game-level-common/game-level';
import { SecondsToDurationStringPipe } from '../../seconds-to-duration-string-pipe';
import { GameConstants } from '../../game-level-common/game-constants';

@Component({
  imports: [RouterLink, SecondsToDurationStringPipe],
  selector: 'app-math-1',
  styleUrl: './math-1.scss',
  templateUrl: './math-1.html',
})
export class Math1 extends GameLevel{

  readonly totalSteps = 4;
  step = signal(1);
  pause = false;

  override chapterName: string = GameConstants.mathChapter;
  override chapterLevel: number = 1;

  answerCurrentStep(correct: boolean, sender: HTMLElement){
    if (this.pause == false){
      if (correct){
        this.pause = true;
        sender.style.fill = this.correctColor;

        setTimeout(() => {
          this.pause = false;
          this.proceedToNextStep();
        }, 700);
      }
      else{
        this.storeMistake();
        sender.style.fill = this.wrongColor;
      }
    }
  }

  private proceedToNextStep(){
    this.step.update(s => s + 1);
    if (this.step() > this.totalSteps){
      this.finish();
    }
  }

  private storeMistake(){
    this.score.update(s => Math.max(s - 1, 1));
  }

  override restart(): void {
    super.restart();
    this.step.set(1);
  }
}
