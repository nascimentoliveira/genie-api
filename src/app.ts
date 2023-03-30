import express, { Express } from "express";
import cors from "cors";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"));


export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
}

export default app;
