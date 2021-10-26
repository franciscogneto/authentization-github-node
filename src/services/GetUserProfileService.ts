import prismaClient from "../prisma"



class GetUserProfileService{
  public async execute(userId:string){
    const user = prismaClient.user.findFirst({where:{
      id:userId
    },include:{
      messages:true,
    }});

    return user;
  }
}

export {GetUserProfileService}