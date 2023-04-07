import { Router } from "express";

import { signUpSchema } from "@/models";
import { validateBody } from "@/middlewares";
import { createUser } from "@/controllers";

const signUpRouter = Router();

signUpRouter.post("/", validateBody(signUpSchema), createUser);

export { signUpRouter };
