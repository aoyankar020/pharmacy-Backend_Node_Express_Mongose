import express from "express";
export const rootRoute = express.Router();
rootRoute.get("/", (req, res) => {
    res.send("Success From root Route");
});
rootRoute.post("/user", (req, res) => {
    res.send("Post User From Root");
});
