// import errorHandler from "errorhandler";

import app from "./app";
/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());
app.set("port", process.env.PORT || 3000);
/*
 * Start Express server.
 */

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("Press CTRL-C to stop\n");
});

console.log("hello909ddddd");


export default server;