import { JsonValue } from "type-fest";

export type Integration = {
  createdAt: Date;
  credentials: JsonValue;
  id: string;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
