import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Auth from './Auth'

export default class Proyecto extends BaseModel {

  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
