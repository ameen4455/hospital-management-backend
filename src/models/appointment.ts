import { Model } from "objection";
import { Doctor } from "./doctors";
import { Hospital } from "./hospital";
import { User } from "./user";

export class Appointments extends Model {
  static tableName = "appointment";
  static idColumn = "id";

  public date?: string;
  public time?: string;
  public h_id?: string;
  public d_id?: string;
  public u_id?: string;

  static relationMappings = {
    hid: {
      join: {
        from: "appointment.h_id",
        to: "hospital.id",
      },
      modelClass: Hospital,
      relation: Model.BelongsToOneRelation,
    },
    did: {
      join: {
        from: "appointment.d_id",
        to: "doctor.id",
      },
      modelClass: Doctor,
      relation: Model.BelongsToOneRelation,
    },
    uid: {
      join: {
        from: "appointment.d_id",
        to: "users.id",
      },
      modelClass: User,
      relation: Model.BelongsToOneRelation,
    },
  };
}
