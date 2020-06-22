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

// router.get("/api/v1", (req: any, res: any) => {

//     res.end("helddlo")
// });

app.get("/healthCheck", async (req: any, res: any) => {
    console.log("=========+===============");
    res.status(200).end("===============+=======");
});

export default app;
