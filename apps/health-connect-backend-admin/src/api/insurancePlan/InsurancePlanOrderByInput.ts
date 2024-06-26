import { SortOrder } from "../../util/SortOrder";

export type InsurancePlanOrderByInput = {
  coverageDetails?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  planName?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
