/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest, Request} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import * as express from "express";
import {getAuth} from "firebase-admin/auth";
import {initializeApp} from "firebase-admin/app";
import {
  deletePlayer,
  getPlayer,
  saveGameSession,
  updatePlayer,
} from "@dataconnect/admin-generated";

initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

/**
 * Validates the request authorization and gets the user UID
 * @param {Request} request
 * @param {express.Response} response
 * @return {string}
 */
async function validateAuthGetUid(
  request: Request, response: express.Response): Promise<string> {
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    response.status(401).send("Unauthenticated");
    return "";
  }

  try {
    const idToken = authHeader.substring("Bearer ".length);
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    console.log("Authenticated UID:", uid);
    return uid;
  } catch (error) {
    logger.error(error);
    response.status(401).send("Invalid authentication");
  }
  return "";
}


exports.updatePlayer = onRequest(
  {
    cors: [
      "http://127.0.0.1:5000",
      "http://localhost:4200",
      "https://pi-projekt-36c14.web.app",
    ],
  },
  async (request, response) => {
    if (!request.body) {
      response.status(400).send("Request body empty");
      return;
    }

    const userUid = await validateAuthGetUid(request, response);
    logger.info("updatePlayer req: " + request.body);

    const {playerId, name, born, avatarId} = request.body;

    if (!playerId) {
      response.status(400).send("Request body not containing 'playerId'");
      return;
    }

    const getData = {
      playerId: playerId,
      userId: userUid,
    };
    const players = await getPlayer(getData);
    const player = players.data.players[0];

    if (player) {
      const updateData = {
        playerId: playerId,
        name: name ?? player.name,
        born: born ?? player.born,
        avatarId: avatarId ?? player.avatarId,
      };
      await updatePlayer(updateData);
      response.send({status: "ok"});
      return;
    }

    response.status(404).send({status: "not found"});
  });


exports.deletePlayer = onRequest(
  {
    cors: [
      "http://127.0.0.1:5000",
      "http://localhost:4200",
      "https://pi-projekt-36c14.web.app",
    ],
  },
  async (request, response) => {
    if (!request.body) {
      response.status(400).send("Request body empty");
      return;
    }

    const userUid = await validateAuthGetUid(request, response);
    logger.info("deletePlayer req: " + request.body);

    const {playerId} = request.body;

    if (!playerId) {
      response.status(400).send("Request body not containing 'playerId'");
      return;
    }

    const getData = {
      playerId: playerId,
      userId: userUid,
    };
    const player = await getPlayer(getData);
    if (player.data.players.length > 0) {
      const deleteData = {
        playerId: playerId,
      };
      await deletePlayer(deleteData);
      response.send({status: "ok"});
      return;
    }

    response.status(404).send({status: "not found"});
  });


exports.saveGameSession = onRequest(
  {
    cors: [
      "http://127.0.0.1:5000",
      "http://localhost:4200",
      "https://pi-projekt-36c14.web.app",
    ],
  },
  async (request, response) => {
    if (!request.body) {
      response.status(400).send("Request body empty");
      return;
    }

    const userUid = await validateAuthGetUid(request, response);

    console.log("saveGameSession req: " + request.body);

    const {
      playerId,
      chapter,
      level,
      score,
      durationSeconds,
      playedAt,
    } = request.body;

    if (!playerId) {
      response.status(400).send("Request body not containing 'playerId'");
      return;
    }
    if (!chapter) {
      response.status(400).send("Request body not containing 'chapter'");
      return;
    }
    if (!level) {
      response.status(400).send("Request body not containing 'level'");
      return;
    }
    if (score === undefined || score === null) {
      response.status(400).send("Request body not containing 'score'");
      return;
    }
    if (durationSeconds === undefined || durationSeconds === null) {
      response.status(400).send(
        "Request body not containing 'durationSeconds'");
      return;
    }
    if (!playedAt) {
      response.status(400).send("Request body not containing 'playedAt'");
      return;
    }

    const getData = {
      playerId: playerId,
      userId: userUid,
    };
    const player = await getPlayer(getData);
    if (player.data.players.length > 0) {
      const saveData = {
        playerId: playerId,
        chapter: chapter,
        level: level,
        score: score,
        durationSeconds: durationSeconds,
        playedAt: playedAt,
      };
      await saveGameSession(saveData);
      response.send({status: "ok"});
      return;
    }

    response.status(404).send({status: "not found"});
  });
