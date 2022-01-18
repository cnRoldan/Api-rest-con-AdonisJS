import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

  public async store({request}){
    const {username , email , password } = request.all();
    console.log(username,email,password);
    const user = await User.create({
      username,
      email,
      password
    })

    console.log(user.$isPersisted) // true
    return user;
  };
}
