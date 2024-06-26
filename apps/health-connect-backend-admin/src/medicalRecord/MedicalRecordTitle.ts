import { MedicalRecord as TMedicalRecord } from "../api/medicalRecord/MedicalRecord";

export const MEDICALRECORD_TITLE_FIELD = "doctorName";

export const MedicalRecordTitle = (record: TMedicalRecord): string => {
  return record.doctorName?.toString() || String(record.id);
};
