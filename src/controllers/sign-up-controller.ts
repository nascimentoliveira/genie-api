import signUpService from "@/services/sign-up-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response) {
  const { email, name, password } = req.body;

  try {
    const user = await signUpService.createUser({ email, name, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
