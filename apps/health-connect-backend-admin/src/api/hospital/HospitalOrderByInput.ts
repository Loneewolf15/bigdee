import { SortOrder } from "../../util/SortOrder";

export type HospitalOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  hospitalName?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
