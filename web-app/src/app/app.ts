import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  viewSecondaryBackground = signal(false);

  constructor(){
    // Subscribe to router events and react to events
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const secondaryBackground = event.url.startsWith("/math-levels/") || event.url.startsWith("/alph-levels/");
        this.viewSecondaryBackground.set(secondaryBackground);
      }
    });
  }
}
