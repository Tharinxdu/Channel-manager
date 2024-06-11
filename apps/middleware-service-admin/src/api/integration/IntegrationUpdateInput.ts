import { InputJsonValue } from "../../types";

export type IntegrationUpdateInput = {
  credentials?: InputJsonValue;
  name?: string | null;
  typeField?: string | null;
};
