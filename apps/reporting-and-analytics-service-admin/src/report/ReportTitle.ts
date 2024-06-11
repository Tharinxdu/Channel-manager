import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "name";

export const ReportTitle = (record: TReport): string => {
  return record.name?.toString() || String(record.id);
};
