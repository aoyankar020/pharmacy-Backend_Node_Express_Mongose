// Create a MongoClient with a MongoClientOptions object to set the Stable API version
import { MongoClient, ServerApiVersion } from "mongodb";
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import { rootRoute } from "./routes/routes.root";

const app: Application = express();
app.use(express.json());

app.use(rootRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default { app };
