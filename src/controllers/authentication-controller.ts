import authenticationService, { SignInParams } from "@/services/authentication-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;
  try {
    const result = await authenticationService.signIn({ email, password });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "InvalidCredentialsError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
