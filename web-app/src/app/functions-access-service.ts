import { inject, Service } from '@angular/core';
import { AuthService } from './auth-service';
import { HttpClient, HttpClientCommonOptions } from '@angular/common/http';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Player } from './models/player';

@Service()
export class FunctionsAccessService {

  private httpClient = inject(HttpClient);
  private authService = inject(AuthService);
  private functionsBaseUrl: string;

  constructor(){
    this.functionsBaseUrl = environment.functionsBaseUrl;
  }
  
  async updatePlayer(player: Player): Promise<void>{
    const data = { 
      playerId: player.id,
      name: player.name,
      born: player.born.toISOString(),
      avatarId: player.avatarId,
    };
    const options = await this.getHttpOptions();

    let response = await this.httpClient.post(this.functionsBaseUrl + "/updatePlayer", data, options);
    let res = await lastValueFrom(response);
    console.log("Player update: " + JSON.stringify(res));
  }

  async deletePlayer(playerId: string): Promise<void>{
    let data = {
      playerId: playerId,
    }
    const options = await this.getHttpOptions();

    let response = await this.httpClient.post(this.functionsBaseUrl + "/deletePlayer", data, options);
    let res = await lastValueFrom(response);
    console.log("Player deletion: " + JSON.stringify(res));
  }


  private async getHttpOptions(): Promise<HttpClientCommonOptions>{
    const authToken = await this.authService.getAuthToken();
    const options = { 
      headers: {
        'Authorization': "Bearer " + authToken
      }
    };
    return options;
  }
}
