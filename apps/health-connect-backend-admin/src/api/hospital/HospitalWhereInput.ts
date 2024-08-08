import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HospitalWhereInput = {
  contactNumber?: StringNullableFilter;
  hospitalName?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
