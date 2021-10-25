import prismaClient from "../prisma";



class CreateMessageService{
  public async execute(text:string, user_id:string){
    console.log('aqui');
    console.log(user_id);
    const message = await prismaClient.message.create({data:{
      text,
      userId:user_id,
    }, include:{
      user:true,
    }});
    return message;
  }
}

export {CreateMessageService}