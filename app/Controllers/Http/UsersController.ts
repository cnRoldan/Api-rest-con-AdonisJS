import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Auth from "App/Models/Auth";

export default class UsersController {
  public async login({ auth, request, response }) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      const token = await auth.use("api").attempt(email, password);
      return token;
    } catch {
      return response.badRequest("Invalid credentials");
    }
  }

  public async store({ request }) {
    const { username, email, password } = request.all();
    console.log(username, email, password);
    const user = await Auth.create({
      username,
      email,
      password,
    });

    console.log(user.$isPersisted); // true
    return user;
  }
}
