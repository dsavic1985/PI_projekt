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

  currentStepPickedLetters = signal<string[]>([]);
  currentStepLetterPosition = signal(0);
  currentStepPickedHtmlElements: HTMLElement[] = [];
  showWrong = signal(false);
  showCorrect = signal(false);

  pause = false;

  ngOnInit(): void {
    this.initCurrentState();
  }

  private initCurrentState(){
    const answer = this.answers.get(this.step()) ?? '';
    const array = Array.from(answer).map(x => '\u00a0');
    this.currentStepPickedLetters.set(array);
    this.currentStepLetterPosition.set(0);

    while(this.currentStepPickedHtmlElements.length > 0){
      let elem = this.currentStepPickedHtmlElements.pop();
      elem?.classList.remove("answer-picked");
    }
  }

  addLetter(letter: string, sender: HTMLElement){
    if (this.pause)
      return;

    sender.classList.add("answer-picked");
    this.currentStepPickedHtmlElements.push(sender);
    const position = this.currentStepLetterPosition();

    this.currentStepPickedLetters.update(letters => {
      letters[position] = letter;
      return letters;
    });

    const answer = this.answers.get(this.step());
    const answerLength = answer?.length ?? 1;

    if (position >= answerLength - 1){
      let word = this.currentStepPickedLetters().join('').toLowerCase();
      if (word == answer){
        this.proceedToNextStep();
      }
      else{
        this.storeMistake();
      }
    }
    else{
      this.currentStepLetterPosition.update(i => i + 1);
    }
  }

  storeMistake(){
    this.pause = true;
    this.score.update(s => Math.max(s - 1, 1));
    this.showWrong.set(true);

    setTimeout(() => {
      this.showWrong.set(false);
      this.initCurrentState();
      this.pause = false;
    }, 1000);
  }

  proceedToNextStep(){
    this.pause = true;
    this.showWrong.set(false);
    this.showCorrect.set(true);
    
    setTimeout(() => {
      this.showCorrect.set(false);

      if (this.step() >= this.totalSteps){
        this.finish();
      }
      else{
        this.step.update(s => s + 1);
        this.initCurrentState();
      }

      this.pause = false;
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
