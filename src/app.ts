import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config";
import { signUpRouter } from "./routes";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/sign-up", signUpRouter);


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
