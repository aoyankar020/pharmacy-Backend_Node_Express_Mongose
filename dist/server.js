import express from "express";
import { rootRoute } from "./routes/routes";
export const app = express();
const port = 3000;
app.use("/cutomer", rootRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
