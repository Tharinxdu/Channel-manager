import { Ota as TOta } from "../api/ota/Ota";

export const OTA_TITLE_FIELD = "name";

export const OtaTitle = (record: TOta): string => {
  return record.name?.toString() || String(record.id);
};
