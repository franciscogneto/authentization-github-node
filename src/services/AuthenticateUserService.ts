import axios from "axios";

interface IAccessTokenResponse {
  access_token:string;
}

interface IUserResponse {
  avatar_url:string,
  login:string,
  id:number,
  name:string
}

class AuthenticateUserService{
  public async execute(code:string){
    const url = "https://github.com/login/oauth/access_token";

    const {data} = await axios.post<IAccessTokenResponse>(url, null, {//Forçando o axios retornar apenas os campos da interface
      params:{
        client_id:process.env.GITHUB_CLIENT_ID,
        client_secret:process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers:{
        "Accept": "application/json"
      }
    });
    console.log(data);
    const response = await axios.get<IUserResponse>("https://api.github.com/user", {
      headers:{
        authorization: `Bearer ${data.access_token}`
      }
    })


    return response.data;
     

  }

}


export {AuthenticateUserService}