import { Model } from "objection";

export class Hospital extends Model {
  static tableName = "hospital";
  static idColumn = "id";
  public name?: number;
  public id?: string;
  public h_addr?: string;
}
