import { Directive, HostListener, inject, OnInit, signal } from "@angular/core";
import { DataAccessService } from "../data-access-service";
import { ActivatedRoute } from "@angular/router";

@Directive()
export abstract class GameLevels implements OnInit{
  playerId = "";
  highestLevel = signal(0);
  private activatedRoute = inject(ActivatedRoute);
  private dataAccess = inject(DataAccessService);

  abstract chapterName: string;

  isPortrait = signal(false);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['playerId'];
    });
  }

  async ngOnInit(): Promise<void> {
    const sessions = await this.dataAccess.getSessions(this.playerId);
    const levels = sessions
        .filter(x => x.chapter == this.chapterName)
        .map(x => x.level);
    const highestLevel = Math.max(...levels);
    this.highestLevel.set(highestLevel);
    
    this.checkWindowSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWindowSize();
  }

  private checkWindowSize(){
    this.isPortrait.set(window.innerHeight > window.innerWidth);
  }
}