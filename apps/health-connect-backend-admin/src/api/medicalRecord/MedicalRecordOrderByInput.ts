import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  createdAt?: SortOrder;
  dateOfVisit?: SortOrder;
  doctorName?: SortOrder;
  id?: SortOrder;
  recordDetails?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
