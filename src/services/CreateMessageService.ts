import { io } from "../app";
import prismaClient from "../prisma";


class CreateMessageService{
  public async execute(text:string, user_id:string){


    const message = await prismaClient.message.create({data:{
      text,
      userId:user_id,
    }, include:{
      user:true,
    }});

    const infoWs = {
      text: message.text,
      userId: message.userId,
      createdAt: message.createdAt,
      user : {
        name:message.user.name,
        avatarUrl: message.user.avatar_url
      }
    }

    io.emit("new_message", infoWs );

    return message;
  }
}

export {CreateMessageService}