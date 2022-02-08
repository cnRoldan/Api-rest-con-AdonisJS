import AccesoProhibidoException from "App/Exceptions/AccesoProhibidoException";

export default class AutorizacionService{
  public static verificarPermiso(recurso, user){
    if (recurso.authId != user.id) {
      throw new AccesoProhibidoException("No puede acceder al recurso: ".concat(recurso), 403);
    }
  }
}
