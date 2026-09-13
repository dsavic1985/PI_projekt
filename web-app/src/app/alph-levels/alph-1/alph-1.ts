import { Component, OnInit, signal } from '@angular/core';
import { GameLevel } from '../../game-level-common/game-level';
import { RouterLink } from '@angular/router';
import { SecondsToDurationStringPipe } from '../../seconds-to-duration-string-pipe';
import { GameConstants } from '../../game-level-common/game-constants';

@Component({
  imports: [RouterLink, SecondsToDurationStringPipe],
  selector: 'app-alph-1',
  styleUrl: './alph-1.scss',
  templateUrl: './alph-1.html',
})
export class Alph1 extends GameLevel implements OnInit {

  readonly totalSteps = 3;
  step = signal(1);

  override chapterName: string = GameConstants.alphChapter;
  override chapterLevel: number = 1;

  readonly answers = new Map([
    [1, "lišče"],
    [2, "jabuke"],
    [3, "oblak"],
  ]);

  currentStepLetters = signal<string[]>([]);
  currentStepLetterIdx = signal(0);
  showWrong = signal(false);
  showCorrect = signal(false);

  pause = false;

  ngOnInit(): void {
    this.initCurrentState();
  }

  private initCurrentState(){
    const ans = this.answers.get(this.step());
    const array = Array.from(ans ?? '').map(x => '\u00a0');
    this.currentStepLetters.set(array);
    this.currentStepLetterIdx.set(0);
  }

  addLetter(letter: string){
    if (this.pause)
      return;

    const idx = this.currentStepLetterIdx();

    this.currentStepLetters.update(l => {
      l[idx] = letter;
      return l;
    });

    let ans = this.answers.get(this.step());
    if (idx >= (ans?.length ?? 1) - 1){
      let word = this.currentStepLetters().join('').toLowerCase();
      if (word == ans){
        this.proceedToNextStep();
      }
      else{
        this.storeMistake();
      }
    }
    else{
      this.currentStepLetterIdx.update(i => i + 1);
    }
  }

  storeMistake(){
    this.score.update(s => Math.max(s - 1, 1));
    this.showWrong.set(true);
    this.initCurrentState();
  }

  proceedToNextStep(){
    this.showWrong.set(false);
    this.showCorrect.set(true);
    this.pause = true;
    
    setTimeout(() => {
      this.pause = false;
      this.showCorrect.set(false);

      if (this.step() >= this.totalSteps){
        this.finish();
      }
      else{
        this.step.update(s => s + 1);
        this.initCurrentState();
      }
    }, 1000);
  }

  override restart(): void {
    super.restart();
    this.step.set(1);
    this.showWrong.set(false);
    this.showCorrect.set(false);
    this.initCurrentState();    
  }
}
