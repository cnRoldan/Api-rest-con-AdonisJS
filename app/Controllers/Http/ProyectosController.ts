// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Auth from "App/Models/Auth";


export default class ProyectosController {

  public async index({auth}){
    await auth.use('api').authenticate()
    let user:Auth = auth.use('api').user;
    return await user.related('proyectos').query()
  }

}
