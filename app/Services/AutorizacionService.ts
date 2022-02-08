import AccesoProhibidoException from "App/Exceptions/AccesoProhibidoException";
import RecursoNoEncontradoException from "App/Exceptions/RecursoNoEncontradoException";
import Auth from "App/Models/Auth";
import Proyecto from "App/Models/Proyecto";

export default class AutorizacionService{
  public static verificarPermiso(recurso, user:Auth){
    if (!recurso){
      throw new RecursoNoEncontradoException("No se encuentra el recurso", 403);
    }

    if (recurso.authId !== user.id) {
      throw new AccesoProhibidoException("No puede acceder al recurso: ".concat(recurso.nombre), 403);
    }
  }
}
