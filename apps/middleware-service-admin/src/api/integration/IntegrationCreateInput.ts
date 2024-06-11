import { InputJsonValue } from "../../types";

export type IntegrationCreateInput = {
  credentials?: InputJsonValue;
  name?: string | null;
  typeField?: string | null;
};
