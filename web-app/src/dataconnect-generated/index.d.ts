import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreatePlayerData {
  player_insert: Player_Key;
}

export interface CreatePlayerVariables {
  name: string;
  born: DateString;
  avatarId: number;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
}

export interface GameSession_Key {
  id: UUIDString;
  __typename?: 'GameSession_Key';
}

export interface GetGameSessionsData {
  gameSessions: ({
    chapter: string;
    level: number;
    score: number;
    playedAt: TimestampString;
    durationSeconds: number;
  })[];
}

export interface GetGameSessionsVariables {
  playerId: UUIDString;
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
}

export interface GetPlayersData {
  players: ({
    id: UUIDString;
    name: string;
    born: DateString;
    avatarId: number;
  } & Player_Key)[];
}

export interface GetUserData {
  user?: {
    displayName: string;
    email: string;
    createdAt: TimestampString;
  };
}

export interface Player_Key {
  id: UUIDString;
  __typename?: 'Player_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreatePlayerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlayerVariables): MutationRef<CreatePlayerData, CreatePlayerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePlayerVariables): MutationRef<CreatePlayerData, CreatePlayerVariables>;
  operationName: string;
}
export const createPlayerRef: CreatePlayerRef;

export function createPlayer(vars: CreatePlayerVariables): MutationPromise<CreatePlayerData, CreatePlayerVariables>;
export function createPlayer(dc: DataConnect, vars: CreatePlayerVariables): MutationPromise<CreatePlayerData, CreatePlayerVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetPlayersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPlayersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPlayersData, undefined>;
  operationName: string;
}
export const getPlayersRef: GetPlayersRef;

export function getPlayers(options?: ExecuteQueryOptions): QueryPromise<GetPlayersData, undefined>;
export function getPlayers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetPlayersData, undefined>;

interface GetPlayerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlayerVariables): QueryRef<GetPlayerData, GetPlayerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPlayerVariables): QueryRef<GetPlayerData, GetPlayerVariables>;
  operationName: string;
}
export const getPlayerRef: GetPlayerRef;

export function getPlayer(vars: GetPlayerVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayerData, GetPlayerVariables>;
export function getPlayer(dc: DataConnect, vars: GetPlayerVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayerData, GetPlayerVariables>;

interface GetGameSessionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGameSessionsVariables): QueryRef<GetGameSessionsData, GetGameSessionsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetGameSessionsVariables): QueryRef<GetGameSessionsData, GetGameSessionsVariables>;
  operationName: string;
}
export const getGameSessionsRef: GetGameSessionsRef;

export function getGameSessions(vars: GetGameSessionsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameSessionsData, GetGameSessionsVariables>;
export function getGameSessions(dc: DataConnect, vars: GetGameSessionsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameSessionsData, GetGameSessionsVariables>;

