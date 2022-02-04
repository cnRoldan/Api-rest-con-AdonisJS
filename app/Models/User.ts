import { BaseModel, beforeSave, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import {DateTime} from "luxon";
import Proyecto from "./Proyecto";


export default class User extends BaseModel {
  @hasMany(() => Proyecto)
  public proyectos: HasMany<typeof Proyecto>

  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @beforeSave()
  // public static async hashPassword(user: User) {
  //   if (user.$dirty.password) {
  //     user.password = await Hash.make(user.password);
  //   }
  // }
}
