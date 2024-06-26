import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InsurancePlanListRelationFilter } from "../insurancePlan/InsurancePlanListRelationFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  insurancePlans?: InsurancePlanListRelationFilter;
  lastName?: StringNullableFilter;
  medicalRecords?: MedicalRecordListRelationFilter;
  phone?: StringNullableFilter;
  username?: StringFilter;
};
