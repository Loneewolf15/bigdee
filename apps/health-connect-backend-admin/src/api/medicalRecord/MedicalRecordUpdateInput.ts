import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalRecordUpdateInput = {
  dateOfVisit?: Date | null;
  doctorName?: string | null;
  recordDetails?: string | null;
  user?: UserWhereUniqueInput | null;
};
