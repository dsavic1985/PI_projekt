export class GameSession{
  chapter: string = "";
  level: number = 1;
  score: number = 0;
  durationSeconds: number = 0;
  playedAt: Date = new Date();
  playerId: string = "";
}