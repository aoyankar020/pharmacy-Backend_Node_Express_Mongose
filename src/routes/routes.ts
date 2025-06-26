import express, { Request, Response } from "express";
export const rootRoute = express.Router();

rootRoute.get("/", (req: Request, res: Response) => {
  res.send("Success From root Route");
});
rootRoute.post("/user", (req: Request, res: Response) => {
  res.send("Post User From Root");
});
