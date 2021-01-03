import { Model } from "objection";

export class Doctor extends Model {
  static tableName = "doctor";
  static idColumn = "id";
  public name?: number;
  public id?: string;
  public username?: string;
  public password?: string;
  public payment_per_session?: number;
}

// export class CandidateInfo extends Model {
//   static tableName = "candidate_info";
//   static idColumn = "id";
//   static relationMappings = {
//     validation: {
//       join: {
//         from: "candidate_info.id",
//         to: "validation[Candidate ID]",
//       },
//       modelClass: Validation,
//       relation: Model.BelongsToOneRelation,
//     },
//   };
// }

// export class ValidationOutput extends Model {
//   static tableName = "validation_output";
//   static idColumn = "uuid";

//   static relationMappings = {
//     validation: {
//       join: {
//         from: "validation_output.validation_uuid",
//         to: "validation.id",
//       },
//       modelClass: Validation,
//       relation: Model.BelongsToOneRelation,
//     },
//   };

//   public skills_module_score?: number;
//   public overall_score?: number;
//   public work_experience_score?: number;
//   public company_score?: number;
//   public uuid?: string;
//   public validation_uuid?: string;
// }

// export class ValidationOverall extends Model {
//   static tableName = "validation_overall";
//   static idColumn = "run_id";

//   public notes?: string;

//   public timestamp?: string;
//   public run_id?: number;

//   public skills_module_score?: number;
//   public overall_score?: number;
//   public work_experience_score?: number;
//   public company_score?: number;

//   public number_of_jobs?: number;
//   public number_of_candidates?: number;
// }
