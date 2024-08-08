import { InsurancePlan as TInsurancePlan } from "../api/insurancePlan/InsurancePlan";

export const INSURANCEPLAN_TITLE_FIELD = "planName";

export const InsurancePlanTitle = (record: TInsurancePlan): string => {
  return record.planName?.toString() || String(record.id);
};
