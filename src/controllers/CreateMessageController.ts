
import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
  public async handle(request:Request, response:Response){
    const {message} = request.body;
    const {userId} = request;
    
    const service = new CreateMessageService();
   
    const result = await service.execute(message,userId);

    return response.status(200).json(result);
   
  }
}


export {CreateMessageController}