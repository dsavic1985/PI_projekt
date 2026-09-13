# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, createPlayer, getUser, getPlayers, getPlayer, getGameSessions } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation CreatePlayer:  For variables, look at type CreatePlayerVars in ../index.d.ts
const { data } = await CreatePlayer(dataConnect, createPlayerVars);

// Operation GetUser: 
const { data } = await GetUser(dataConnect);

// Operation GetPlayers: 
const { data } = await GetPlayers(dataConnect);

// Operation GetPlayer:  For variables, look at type GetPlayerVars in ../index.d.ts
const { data } = await GetPlayer(dataConnect, getPlayerVars);

// Operation GetGameSessions:  For variables, look at type GetGameSessionsVars in ../index.d.ts
const { data } = await GetGameSessions(dataConnect, getGameSessionsVars);


```