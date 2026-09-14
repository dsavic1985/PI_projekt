import { inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GameSession } from "../models/gameSession";
import { ErrorHelper } from "../error-helper";
import { FunctionsAccessService } from "../functions-access-service";

export abstract class GameLevel {
  private activatedRoute = inject(ActivatedRoute);
  private functionsAccess = inject(FunctionsAccessService);

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
  
  async finish(): Promise<void>{
    const msDiff = Date.now() - (this.startedAt() ?? new Date()).getTime();
    const durationSec = Math.floor(msDiff / 1000);

    this.durationSeconds.set(durationSec);
    this.isFinished.set(true);

    try{
      const session: GameSession = {
        playerId: this.playerId,
        chapter: this.chapterName,
        level: this.chapterLevel,
        durationSeconds: durationSec,
        playedAt: new Date(),
        score: this.score(),
      };
      await this.functionsAccess.saveGameSession(session);
    }
    catch(e){
      alert(ErrorHelper.getMessage(e));
    }
  }

  restart(){
    this.durationSeconds.set(undefined);
    this.isFinished.set(false);
    this.startedAt.set(new Date());
  }
}
