import { User } from "../user/User";

export type InsurancePlan = {
  coverageDetails: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  planName: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
