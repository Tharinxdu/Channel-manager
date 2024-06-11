import { Gds as TGds } from "../api/gds/Gds";

export const GDS_TITLE_FIELD = "name";

export const GdsTitle = (record: TGds): string => {
  return record.name?.toString() || String(record.id);
};
