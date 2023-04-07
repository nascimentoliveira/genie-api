import { CreateUserParams } from "@/services/sign-up-service";
import Joi from "joi";

export const signUpSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
