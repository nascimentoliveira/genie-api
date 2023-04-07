import { CreateUserParams } from "@/services/user-service";
import Joi from "joi";

export const userSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
