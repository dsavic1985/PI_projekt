import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface DeletePlayerData {
  player_delete?: Player_Key | null;
}

export interface DeletePlayerVariables {
  playerId: UUIDString;
}

export interface GameSession_Key {
  id: UUIDString;
  __typename?: 'GameSession_Key';
}

export interface GetPlayerData {
  players: ({
    id: UUIDString;
    name: string;
    born: DateString;
    avatarId: number;
  } & Player_Key)[];
}

export interface GetPlayerVariables {
  playerId: UUIDString;
  userId: string;
}

export interface Player_Key {
  id: UUIDString;
  __typename?: 'Player_Key';
}

export interface SaveGameSessionData {
  gameSession_insert: GameSession_Key;
}

export interface SaveGameSessionVariables {
  playerId: UUIDString;
  chapter: string;
  level: number;
  score: number;
  durationSeconds: number;
  playedAt: TimestampString;
}

export interface UpdatePlayerData {
  player_update?: Player_Key | null;
}

export interface UpdatePlayerVariables {
  playerId: UUIDString;
  name: string;
  born: DateString;
  avatarId: number;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'DeletePlayer' Mutation. Allow users to execute without passing in DataConnect. */
export function deletePlayer(dc: DataConnect, vars: DeletePlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletePlayerData>>;
/** Generated Node Admin SDK operation action function for the 'DeletePlayer' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletePlayer(vars: DeletePlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletePlayerData>>;

/** Generated Node Admin SDK operation action function for the 'UpdatePlayer' Mutation. Allow users to execute without passing in DataConnect. */
export function updatePlayer(dc: DataConnect, vars: UpdatePlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdatePlayerData>>;
/** Generated Node Admin SDK operation action function for the 'UpdatePlayer' Mutation. Allow users to pass in custom DataConnect instances. */
export function updatePlayer(vars: UpdatePlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdatePlayerData>>;

/** Generated Node Admin SDK operation action function for the 'SaveGameSession' Mutation. Allow users to execute without passing in DataConnect. */
export function saveGameSession(dc: DataConnect, vars: SaveGameSessionVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<SaveGameSessionData>>;
/** Generated Node Admin SDK operation action function for the 'SaveGameSession' Mutation. Allow users to pass in custom DataConnect instances. */
export function saveGameSession(vars: SaveGameSessionVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<SaveGameSessionData>>;

/** Generated Node Admin SDK operation action function for the 'GetPlayer' Query. Allow users to execute without passing in DataConnect. */
export function getPlayer(dc: DataConnect, vars: GetPlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetPlayerData>>;
/** Generated Node Admin SDK operation action function for the 'GetPlayer' Query. Allow users to pass in custom DataConnect instances. */
export function getPlayer(vars: GetPlayerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetPlayerData>>;

