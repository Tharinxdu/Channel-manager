import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  data?: InputJsonValue;
  name?: string | null;
  typeField?: string | null;
};
