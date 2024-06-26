import { InsurancePlan } from "../insurancePlan/InsurancePlan";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  insurancePlans?: Array<InsurancePlan>;
  lastName: string | null;
  medicalRecords?: Array<MedicalRecord>;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
