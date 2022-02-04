// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProyectosController {

  public async index({auth}){

    await auth.use('api').authenticate()
    console.log(auth.use('api').user!)
  }

}
