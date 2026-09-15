# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `connector-web-app`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*GetPlayers*](#getplayers)
  - [*GetPlayer*](#getplayer)
  - [*GetGameSessions*](#getgamesessions)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreatePlayer*](#createplayer)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `connector-web-app`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `connector-web-app` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    displayName: string;
    email: string;
    createdAt: TimestampString;
  };
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetPlayers
You can execute the `GetPlayers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPlayers(options?: ExecuteQueryOptions): QueryPromise<GetPlayersData, undefined>;

interface GetPlayersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPlayersData, undefined>;
}
export const getPlayersRef: GetPlayersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPlayers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetPlayersData, undefined>;

interface GetPlayersRef {
  ...
  (dc: DataConnect): QueryRef<GetPlayersData, undefined>;
}
export const getPlayersRef: GetPlayersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPlayersRef:
```typescript
const name = getPlayersRef.operationName;
console.log(name);
```

### Variables
The `GetPlayers` query has no variables.
### Return Type
Recall that executing the `GetPlayers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPlayersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPlayersData {
  players: ({
    id: UUIDString;
    name: string;
    born: DateString;
    avatarId: number;
  } & Player_Key)[];
}
```
### Using `GetPlayers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPlayers } from '@dataconnect/generated';


// Call the `getPlayers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPlayers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPlayers(dataConnect);

console.log(data.players);

// Or, you can use the `Promise` API.
getPlayers().then((response) => {
  const data = response.data;
  console.log(data.players);
});
```

### Using `GetPlayers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPlayersRef } from '@dataconnect/generated';


// Call the `getPlayersRef()` function to get a reference to the query.
const ref = getPlayersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPlayersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.players);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.players);
});
```

## GetPlayer
You can execute the `GetPlayer` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPlayer(vars: GetPlayerVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayerData, GetPlayerVariables>;

interface GetPlayerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlayerVariables): QueryRef<GetPlayerData, GetPlayerVariables>;
}
export const getPlayerRef: GetPlayerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPlayer(dc: DataConnect, vars: GetPlayerVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayerData, GetPlayerVariables>;

interface GetPlayerRef {
  ...
  (dc: DataConnect, vars: GetPlayerVariables): QueryRef<GetPlayerData, GetPlayerVariables>;
}
export const getPlayerRef: GetPlayerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPlayerRef:
```typescript
const name = getPlayerRef.operationName;
console.log(name);
```

### Variables
The `GetPlayer` query requires an argument of type `GetPlayerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPlayerVariables {
  playerId: UUIDString;
}
```
### Return Type
Recall that executing the `GetPlayer` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPlayerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPlayerData {
  players: ({
    id: UUIDString;
    name: string;
    born: DateString;
    avatarId: number;
  } & Player_Key)[];
}
```
### Using `GetPlayer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPlayer, GetPlayerVariables } from '@dataconnect/generated';

// The `GetPlayer` query requires an argument of type `GetPlayerVariables`:
const getPlayerVars: GetPlayerVariables = {
  playerId: ..., 
};

// Call the `getPlayer()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPlayer(getPlayerVars);
// Variables can be defined inline as well.
const { data } = await getPlayer({ playerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPlayer(dataConnect, getPlayerVars);

console.log(data.players);

// Or, you can use the `Promise` API.
getPlayer(getPlayerVars).then((response) => {
  const data = response.data;
  console.log(data.players);
});
```

### Using `GetPlayer`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPlayerRef, GetPlayerVariables } from '@dataconnect/generated';

// The `GetPlayer` query requires an argument of type `GetPlayerVariables`:
const getPlayerVars: GetPlayerVariables = {
  playerId: ..., 
};

// Call the `getPlayerRef()` function to get a reference to the query.
const ref = getPlayerRef(getPlayerVars);
// Variables can be defined inline as well.
const ref = getPlayerRef({ playerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPlayerRef(dataConnect, getPlayerVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.players);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.players);
});
```

## GetGameSessions
You can execute the `GetGameSessions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGameSessions(vars: GetGameSessionsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameSessionsData, GetGameSessionsVariables>;

interface GetGameSessionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGameSessionsVariables): QueryRef<GetGameSessionsData, GetGameSessionsVariables>;
}
export const getGameSessionsRef: GetGameSessionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGameSessions(dc: DataConnect, vars: GetGameSessionsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameSessionsData, GetGameSessionsVariables>;

interface GetGameSessionsRef {
  ...
  (dc: DataConnect, vars: GetGameSessionsVariables): QueryRef<GetGameSessionsData, GetGameSessionsVariables>;
}
export const getGameSessionsRef: GetGameSessionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGameSessionsRef:
```typescript
const name = getGameSessionsRef.operationName;
console.log(name);
```

### Variables
The `GetGameSessions` query requires an argument of type `GetGameSessionsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetGameSessionsVariables {
  playerId: UUIDString;
}
```
### Return Type
Recall that executing the `GetGameSessions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGameSessionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGameSessionsData {
  gameSessions: ({
    chapter: string;
    level: number;
    score: number;
    playedAt: TimestampString;
    durationSeconds: number;
  })[];
}
```
### Using `GetGameSessions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGameSessions, GetGameSessionsVariables } from '@dataconnect/generated';

// The `GetGameSessions` query requires an argument of type `GetGameSessionsVariables`:
const getGameSessionsVars: GetGameSessionsVariables = {
  playerId: ..., 
};

// Call the `getGameSessions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGameSessions(getGameSessionsVars);
// Variables can be defined inline as well.
const { data } = await getGameSessions({ playerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGameSessions(dataConnect, getGameSessionsVars);

console.log(data.gameSessions);

// Or, you can use the `Promise` API.
getGameSessions(getGameSessionsVars).then((response) => {
  const data = response.data;
  console.log(data.gameSessions);
});
```

### Using `GetGameSessions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGameSessionsRef, GetGameSessionsVariables } from '@dataconnect/generated';

// The `GetGameSessions` query requires an argument of type `GetGameSessionsVariables`:
const getGameSessionsVars: GetGameSessionsVariables = {
  playerId: ..., 
};

// Call the `getGameSessionsRef()` function to get a reference to the query.
const ref = getGameSessionsRef(getGameSessionsVars);
// Variables can be defined inline as well.
const ref = getGameSessionsRef({ playerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGameSessionsRef(dataConnect, getGameSessionsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.gameSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.gameSessions);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `connector-web-app` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreatePlayer
You can execute the `CreatePlayer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlayer(vars: CreatePlayerVariables): MutationPromise<CreatePlayerData, CreatePlayerVariables>;

interface CreatePlayerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlayerVariables): MutationRef<CreatePlayerData, CreatePlayerVariables>;
}
export const createPlayerRef: CreatePlayerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlayer(dc: DataConnect, vars: CreatePlayerVariables): MutationPromise<CreatePlayerData, CreatePlayerVariables>;

interface CreatePlayerRef {
  ...
  (dc: DataConnect, vars: CreatePlayerVariables): MutationRef<CreatePlayerData, CreatePlayerVariables>;
}
export const createPlayerRef: CreatePlayerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlayerRef:
```typescript
const name = createPlayerRef.operationName;
console.log(name);
```

### Variables
The `CreatePlayer` mutation requires an argument of type `CreatePlayerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlayerVariables {
  name: string;
  born: DateString;
  avatarId: number;
}
```
### Return Type
Recall that executing the `CreatePlayer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlayerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlayerData {
  player_insert: Player_Key;
}
```
### Using `CreatePlayer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlayer, CreatePlayerVariables } from '@dataconnect/generated';

// The `CreatePlayer` mutation requires an argument of type `CreatePlayerVariables`:
const createPlayerVars: CreatePlayerVariables = {
  name: ..., 
  born: ..., 
  avatarId: ..., 
};

// Call the `createPlayer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlayer(createPlayerVars);
// Variables can be defined inline as well.
const { data } = await createPlayer({ name: ..., born: ..., avatarId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlayer(dataConnect, createPlayerVars);

console.log(data.player_insert);

// Or, you can use the `Promise` API.
createPlayer(createPlayerVars).then((response) => {
  const data = response.data;
  console.log(data.player_insert);
});
```

### Using `CreatePlayer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlayerRef, CreatePlayerVariables } from '@dataconnect/generated';

// The `CreatePlayer` mutation requires an argument of type `CreatePlayerVariables`:
const createPlayerVars: CreatePlayerVariables = {
  name: ..., 
  born: ..., 
  avatarId: ..., 
};

// Call the `createPlayerRef()` function to get a reference to the mutation.
const ref = createPlayerRef(createPlayerVars);
// Variables can be defined inline as well.
const ref = createPlayerRef({ name: ..., born: ..., avatarId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlayerRef(dataConnect, createPlayerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.player_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.player_insert);
});
```

