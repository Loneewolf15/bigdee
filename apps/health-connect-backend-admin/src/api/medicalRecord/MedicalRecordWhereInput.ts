import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalRecordWhereInput = {
  dateOfVisit?: DateTimeNullableFilter;
  doctorName?: StringNullableFilter;
  id?: StringFilter;
  recordDetails?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
