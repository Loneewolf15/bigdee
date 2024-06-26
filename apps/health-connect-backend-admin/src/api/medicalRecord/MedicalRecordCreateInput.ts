import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalRecordCreateInput = {
  dateOfVisit?: Date | null;
  doctorName?: string | null;
  recordDetails?: string | null;
  user?: UserWhereUniqueInput | null;
};
