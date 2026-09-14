import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-chapters',
  styleUrl: './chapters.scss',
  templateUrl: './chapters.html',
})
export class Chapters {
  playerId = "";
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId = params['playerId'];
    });
  }

  buttonClicked?: HTMLElement;

  buttonMousedown(button: HTMLElement){
    button.classList.add("clicked-down");
    this.buttonClicked = button;
  }

  @HostListener('mouseup')
  hostMouseup(){
    if(this.buttonClicked){
      this.buttonClicked.classList.remove("clicked-down");
      this.buttonClicked = undefined;
    }
  }
}
