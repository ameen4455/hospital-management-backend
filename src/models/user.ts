import { Model } from "objection";

export class User extends Model {
  static tableName = "users";
  static idColumn = "id";
  public name?: number;
  public id?: string;
  public username?: string;
  public password?: string;
}
