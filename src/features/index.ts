import express from "express";
import auth from "./authentication/controllers";
export default () => {
    const Router = express.Router();
    Router.use("/authentication", auth());
    return Router;
}