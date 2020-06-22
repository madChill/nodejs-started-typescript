import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import cors from "cors";

// Create Express server
const app = express();
// Connect to db
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));


// list api
import api from "./features"
app.use("/api/v1", api());

app.get("/healthCheck", async (req: any, res: any) => {
    res.status(200).end("===============+=======");
});

export default app;
