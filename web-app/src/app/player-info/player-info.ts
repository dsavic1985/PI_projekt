import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { AvatarHelper } from '../avatar-helper';

@Component({
  imports: [FormsModule],
  selector: 'app-player-info',
  styleUrl: './player-info.scss',
  templateUrl: './player-info.html',
})
export class PlayerInfo {
  playerId = signal("");
  playerName = signal("");
  playerBorn = signal("2000-01-01");
  playerAvatarId = signal(1);

  playerAvatarSrc = computed(() => {
    let id = this.playerAvatarId();
    return AvatarHelper.getAvatarSrc(id);
  });

  player = new Player();

  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);

  avatarPickerVisible = signal(false);
  pickedAvatarId = signal(1);

  deletePopupVisible = signal(false);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.playerId.set(params['id']);
    });
  }

  back(){
    if (this.avatarPickerVisible()){
      this.avatarPickerVisible.set(false);
    }
    else{
      this.router.navigate(['dashboard']);
    }
  }

  async save(form: NgForm){
    form.form.markAllAsTouched();
    if (form.valid){
    }
    else{
      let errors: ValidationErrors[] = [];
      for(let key in form.form.controls){
        if (form.form.controls.hasOwnProperty(key)) {
          let error = form.form.controls[key].errors;
          if (error)
            errors.push(error);
  }
      }
      console.log("form invalid: "+JSON.stringify(errors));
    }
  }

  showAvatarPicker(){
    this.pickedAvatarId.set(this.playerAvatarId());
    this.avatarPickerVisible.set(true);
  }

  pickAvatarId(avatarId: number){
    this.pickedAvatarId.set(avatarId);
  }

  confirmPickedAvatarId(){
    this.playerAvatarId.set(this.pickedAvatarId());
    this.avatarPickerVisible.set(false);
  }

  showDelete(){
    this.deletePopupVisible.set(true);
  }

  hideDelete(){
    this.deletePopupVisible.set(false);
  }

  async logout(){
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
