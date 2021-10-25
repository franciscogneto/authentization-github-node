import { Request, Response, NextFunction } from "express";
import  {verify}  from "jsonwebtoken";

interface IPaylod {
  sub:string;
}

export function ensureAuthenticated(request:Request,response:Response,next:NextFunction){
  const authToken = request.headers.authorization;


  if(!authToken){
    return response.status(401).json({
      erroCode:"token.invalid",
    });
  }
  console.log(authToken);
  const token = authToken.split(" ")[1];
  try {
    const {sub} = verify(token, process.env.JWT_SECRET) as IPaylod;
    console.log(sub);
    request.userId = sub;
    return next();
  } catch (error) {
    return response.status(401).json({errorCode:"token.expired"})
  }


}