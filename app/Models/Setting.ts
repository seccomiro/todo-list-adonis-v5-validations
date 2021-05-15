import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Setting extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public theme: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}