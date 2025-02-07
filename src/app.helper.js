import { SERVER } from "./v1/utils/constant";
import { isEmpty } from "./v1/utils/helper";

import { sportsBookDatabase } from "../database/mysql";

export const setLanguage = (req, res, next) => {
    if (!isEmpty(req.headers.lang)) {
        req.setLocale(req.headers.lang);
        res.setLocale(req.headers.lang);
    }
    return next();
};
export const setHeaders = (req, res, next) => {
    // Website you wish to allow to connect
    // res.setHeader("Access-Control-Allow-Origin", process.env.FRONT_URL);

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,x-access-token");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    //res.setHeader('Content-Disposition', 'attachment; filename=your_file_name');
    // res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=none");
    next();
}

export const setAPIVersion = (req, res, next) => {
    const apiVersions = ["v1"];
    const pathParts = req.originalUrl.split("/");
    const apiV = pathParts.filter((p) => apiVersions.includes(p))[0];
    if (!apiV) {
        return res.status(422).json({ apiStatus: "DEPRECATED" });
    }
    res.set("API-Version", apiV);
    res.set("ServerTimeZone", TZ);
    res.set("API-Prefix", "api");
    return next(); // Passing the request to the next handler in the stack.
};

export const errorHandler = (error, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get("env") === "development" ? error : {};

    // render the error page
    res.status(error.status || 500);
    if (error.status == 404) {
        return res.status(error.status).json({ message: "Not found." });
    }
    return res.json({ error: error.message });
}

// Normalize a port into a number, string, or false.
export const normalizePort = (serverPort) => {
    const port = parseInt(serverPort, 10);

    if (isNaN(port)) {
        // named pipe
        return serverPort;
    }

    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

// Event listener for HTTP server "error" event.
export const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const port = SERVER.PORT;
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event.
export const onListening = () => {
    try {
        console.info(`${SERVER.NAME} ⚾️ server is ⚽️ running 🎾 on 🏈 ${SERVER.PATH}`);
        sportsBookDatabase.authenticate();
        console.info(`🐬 MySQL Database Connection: Successfully connected to ${process.env.SPORTS_BOOK_DATABASE_NAME} database! 🚀`);
    } catch (error) {
        console.error('❌ 🐬 MySQL Database Connection Error:', error.message);
    }
}