import { login } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema } from "@/models";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", validateBody(signInSchema), login);

export { authenticationRouter };
