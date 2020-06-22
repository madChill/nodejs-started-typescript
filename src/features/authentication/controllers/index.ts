import express from "express";
import register from "./register";
export default () => {
    const Router = express.Router();
    Router.get("/register", register);
    return Router;
}