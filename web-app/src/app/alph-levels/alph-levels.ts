import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-alph-levels',
  styleUrl: './alph-levels.scss',
  templateUrl: './alph-levels.html',
})
export class AlphLevels {
  playerId = "";
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['playerId'];
    });
  }
}
