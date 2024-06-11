import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
