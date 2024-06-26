import { InsurancePlanUpdateManyWithoutUsersInput } from "./InsurancePlanUpdateManyWithoutUsersInput";
import { MedicalRecordUpdateManyWithoutUsersInput } from "./MedicalRecordUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  insurancePlans?: InsurancePlanUpdateManyWithoutUsersInput;
  lastName?: string | null;
  medicalRecords?: MedicalRecordUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
