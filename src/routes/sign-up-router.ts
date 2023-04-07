import { Router } from "express";

import { userSchema } from "@/models";
import { validateBody } from "@/middlewares";
import { createUser } from "@/controllers";

const signUpRouter = Router();

signUpRouter.post("/", validateBody(userSchema), createUser);

export { signUpRouter };
