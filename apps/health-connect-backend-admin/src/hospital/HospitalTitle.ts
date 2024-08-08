import { Hospital as THospital } from "../api/hospital/Hospital";

export const HOSPITAL_TITLE_FIELD = "hospitalName";

export const HospitalTitle = (record: THospital): string => {
  return record.hospitalName?.toString() || String(record.id);
};
