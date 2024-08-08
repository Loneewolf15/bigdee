import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InsurancePlanUpdateInput = {
  coverageDetails?: string | null;
  endDate?: Date | null;
  planName?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
