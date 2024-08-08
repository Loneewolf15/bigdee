import { User } from "../user/User";

export type MedicalRecord = {
  createdAt: Date;
  dateOfVisit: Date | null;
  doctorName: string | null;
  id: string;
  recordDetails: string | null;
  updatedAt: Date;
  user?: User | null;
};
