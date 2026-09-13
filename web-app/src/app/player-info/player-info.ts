import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
import { FormsModule, NgForm, ValidationErrors } from '@angular/forms';
import { DataAccessService } from '../data-access-service';
import { AuthService } from '../auth-service';
import { ErrorHelper } from '../error-helper';
import { AvatarHelper } from '../avatar-helper';

@Component({
  imports: [FormsModule],
  selector: 'app-player-info',
  styleUrl: './player-info.scss',
  templateUrl: './player-info.html',
})
export class PlayerInfo implements OnInit {
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
  private dataAccess = inject(DataAccessService);
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

  async ngOnInit(): Promise<void> {
    if (this.playerId()){
      try{
      let player = await this.dataAccess.getPlayer(this.playerId());
      if (player){
        this.player = player;
        this.playerName.set(player.name);
        this.playerBorn.set(this.player.born.toISOString().split("T")[0]);
        this.playerAvatarId.set(player.avatarId);
      }
        else{
          await this.router.navigate(['/dashboard']);
    }
  }
      catch(e){
        alert(ErrorHelper.getMessage(e));
        await this.router.navigate(['/dashboard']);
      }
    }
  }

  async back(){
    if (this.avatarPickerVisible()){
      this.avatarPickerVisible.set(false);
    }
    else{
      await this.router.navigate(['/dashboard']);
    }
  }

  async save(form: NgForm){
    form.form.markAllAsTouched();
    if (form.valid){
      try{

        this.player.name = this.playerName();
        this.player.born = new Date(this.playerBorn()) ?? this.player.born;
        this.player.avatarId = this.playerAvatarId();

        if (this.playerId()){
        }
        else{
          await this.dataAccess.addPlayer(this.player);
        }
        await this.router.navigate(['/dashboard']);
      }
      catch(e){
        alert(ErrorHelper.getMessage(e));
    }
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
