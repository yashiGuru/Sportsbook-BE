"use strict";
import createError from "http-errors";
import express from "express";
import path from "path";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";

import { errorHandler, normalizePort, onError, onListening, setAPIVersion, setLanguage } from "./app.helper";
import { SERVER } from "./v1/utils/constant";
import i18n from "./v1/config/i18n";

const app = express();

app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(i18n.init);
app.use(setLanguage);
app.disable("etag");
app.use(logger("dev"));

// Enable pre-flight
app.options(SERVER.PATH, cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// API versioning
app.get('/', (req, res) => { res.send(`${SERVER.NAME} ⚾️ server is ⚽️ running 🎾 on 🏈 ${SERVER.PATH}`) });
app.use("/api/v1", setAPIVersion, () => { console.log("API Version set"); });

// catch 404 and forward to error handler
app.use(function (req, res, next) { return next(createError(404)) });
// error handler
app.use(errorHandler);

// Get port from environment and store in Express.
const port = normalizePort(SERVER.PORT || "8000");
app.set("port", port);

// Create HTTP server
const server = createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, onListening);
server.on("error", onError);

export default app;
