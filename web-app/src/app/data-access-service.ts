import { inject, Service } from '@angular/core';
import { Player } from './models/player';
import { connectorConfig, createPlayer, createUser, CreateUserVariables, getGameSessions, getPlayer, getPlayers, getUser } from '@dataconnect/generated';
import { FirebaseAppInitService } from './firebase-app-init-service';
import { connectDataConnectEmulator, ExecuteQueryOptions, getDataConnect } from 'firebase/data-connect';
import { environment } from '../environments/environment';
import { User } from 'firebase/auth';
import { GameSession } from './models/gameSession';

@Service()
export class DataAccessService {

  private appInit = inject(FirebaseAppInitService);
  private serverOnly: ExecuteQueryOptions = { fetchPolicy: 'SERVER_ONLY' };
  
  constructor(){
    const dataConnect = getDataConnect(this.appInit.app, connectorConfig);
    if (environment.development){
      connectDataConnectEmulator(dataConnect, '127.0.0.1', 9399);
    }
  }

  async createUserIfNotExists(user: User){
    const response = await getUser(this.serverOnly);
    if (!response.data.user){
      let create: CreateUserVariables = {
        displayName: user.displayName ?? '<unknown>',
        email: user.email ?? '<unknown>'
      }
      const { data } = await createUser(create);
    }
  }

  async getPlayers(): Promise<Player[]>{
    const result = await getPlayers(this.serverOnly);
    const players = result.data.players.map(x => {
      const player: Player = {
        id: x.id,
        name: x.name,
        born: new Date(x.born),
        avatarId: x.avatarId,
      }
      return player;
    })
    return players;
  }

  async getPlayer(playerId: string): Promise<Player|undefined>{
    const data = { playerId: playerId };
    const result = await getPlayer(data, this.serverOnly);
        
    const player = result.data.players[0];
    if (player){
      return {
        id: player.id,
        name: player.name,
        born: new Date(player.born),
        avatarId: player.avatarId,
      }
    }

    return undefined;
  }

  async addPlayer(player: Player): Promise<void>{
    const data = { 
      name: player.name,
      born: player.born.toISOString(),
      avatarId: player.avatarId,
    };
    const result = await createPlayer(data);
    player.id = result.data.player_insert.id;
  }
}
