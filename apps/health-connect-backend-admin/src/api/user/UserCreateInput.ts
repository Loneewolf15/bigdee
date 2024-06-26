import { InsurancePlanCreateNestedManyWithoutUsersInput } from "./InsurancePlanCreateNestedManyWithoutUsersInput";
import { MedicalRecordCreateNestedManyWithoutUsersInput } from "./MedicalRecordCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  insurancePlans?: InsurancePlanCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  medicalRecords?: MedicalRecordCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
