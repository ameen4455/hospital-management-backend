import { Model } from "objection";
import { Hospital } from "./hospital";

export class Works extends Model {
  static tableName = "works";
  static idColumn = "id";

  public monday?: string;
  public tuesday?: string;
  public wednessday?: string;
  public thursday?: string;
  public friday?: string;
  public saturday?: string;
  public sunday?: string;

  public session_duration?: number;

  static relationMappings = {
    h_id: {
      join: {
        from: "works.h_id",
        to: "hospital.id",
      },
      modelClass: Hospital,
      relation: Model.BelongsToOneRelation,
    },
    d_id: {
      join: {
        from: "works.d_id",
        to: "doctor.id",
      },
      modelClass: Hospital,
      relation: Model.BelongsToOneRelation,
    },
  };
}
