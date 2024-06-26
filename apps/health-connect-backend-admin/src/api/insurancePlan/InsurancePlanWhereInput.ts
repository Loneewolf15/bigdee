import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InsurancePlanWhereInput = {
  coverageDetails?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  planName?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
