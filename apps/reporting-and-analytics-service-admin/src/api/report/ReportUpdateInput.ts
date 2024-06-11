import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  data?: InputJsonValue;
  name?: string | null;
  typeField?: string | null;
};
