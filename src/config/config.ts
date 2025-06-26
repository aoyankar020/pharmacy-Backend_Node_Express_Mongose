import dotenv from "dotenv";
import path from "path";
import { IAppConfig } from "./config.interface";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const appConfig: IAppConfig = {
  node_env: process.env.NODE_ENV,
  port: parseInt(process.env.SERVER_PORT || "3000"),
  database_url: process.env.MONGO_URI || "",
};
