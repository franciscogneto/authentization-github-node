import {Request, Response} from "express"
import { GetUserProfileService } from "../services/GetUserProfileService";




class GetUserProfileController{

  public async handle(request:Request, response:Response){
    const {userId} = request;
    const service = new GetUserProfileService();
    const result = await service.execute(userId);
    return response.status(200).json(result);
  }
}


export {GetUserProfileController}