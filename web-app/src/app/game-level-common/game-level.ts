import { inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export abstract class GameLevel {
  private activatedRoute = inject(ActivatedRoute);

  playerId = "";

  abstract chapterName: string;
  abstract chapterLevel: number;

  isFinished = signal(false);
  score = signal(10);
  startedAt = signal<Date | undefined>(undefined);
  durationSeconds = signal<number | undefined>(undefined);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['playerId'];
    });
    this.startedAt.set(new Date());
  }
  
  finish(){
    let msDiff = Date.now() - (this.startedAt() ?? new Date()).getTime();
    let durationSec = Math.floor(msDiff / 1000);

    this.durationSeconds.set(durationSec);
    this.isFinished.set(true);
  }

  restart(){
    this.durationSeconds.set(undefined);
    this.isFinished.set(false);
    this.startedAt.set(new Date());
  }
}
