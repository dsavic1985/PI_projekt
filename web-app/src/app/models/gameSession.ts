export class GameSession{
  chapter: string = "";
  level: string = "";
  score: number = 0;
  durationSeconds: number = 0;
  playedAt: Date = new Date();
  playerId: string = "";
}