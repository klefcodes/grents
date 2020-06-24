import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";

import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 5000);

const app = express();

// I don't know what this cors config is used for 🤷🏽
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

app.listen(PORT, () => {
    console.info(`Grents service is listening on ${PORT}`)
})