// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Auth from "App/Models/Auth";
import Proyecto from "App/Models/Proyecto";

export default class ProyectosController {
  public async index({ auth }) {
    let user: Auth = auth.use("api").user;
    return await user.related("proyectos").query();
  }

  public async create({ auth, request }) {
    const user: Auth = auth.use("api").user;
    const { nombre } = request.all();
    const proyecto = new Proyecto();
    proyecto.fill({
      nombre,
    });
    await user.related("proyectos").save(proyecto);
    return proyecto;
  }

  public async destroy({ auth, response, params }) {
    const user: Auth = auth.use("api").user;
    const { id } = params;
    const proyecto = await Proyecto.find(id);
    if (proyecto != null) {
      if (proyecto.authId == user.id) {
        await proyecto.delete();
      }else{
        return response.status(403).json({
          mensaje: "No puede eliminar un proyecto que no le pertenece"
        })
      }
    }else{
      return response.status(404).json({
        mensaje: "No existe ningún proyecto con este id"
      })
    }
    return proyecto;
  }
}
