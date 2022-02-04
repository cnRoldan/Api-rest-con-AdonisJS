// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Auth from "App/Models/Auth";
import Proyecto from "App/Models/Proyecto";


export default class ProyectosController {

  public async index({auth}){
    let user:Auth = auth.use('api').user;
    return await user.related('proyectos').query()
  }

  public async create( {auth, request} ){
    const user:Auth = auth.use('api').user;
    const { nombre } = request.all();
    const proyecto = new Proyecto();
    proyecto.fill({
      nombre
    });
    await user.related('proyectos').save(proyecto);
    return proyecto;
  }

  public async destroy ( { auth, request, params}){
    const user:Auth = auth.use('api').user;
  }

}
