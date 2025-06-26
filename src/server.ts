import mongoose from "mongoose";
import appmodule from "./app";
import { appConfig } from "./config/config";

const server = async function () {
  try {
    console.log("Connection String", appConfig?.database_url);
    const connection = await mongoose.connect(appConfig?.database_url);
    if (connection) {
      console.log("connection success with mongoose");
    }
    appmodule.app.listen(appConfig.port, () => {
      console.log(`Server listening on port ${appConfig?.port}`);
    });
  } catch (error) {
    console.log("Error :", error);
  }
};
server().catch(console.dir);
