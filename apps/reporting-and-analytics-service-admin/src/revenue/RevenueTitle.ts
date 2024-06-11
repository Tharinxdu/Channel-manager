import { Revenue as TRevenue } from "../api/revenue/Revenue";

export const REVENUE_TITLE_FIELD = "id";

export const RevenueTitle = (record: TRevenue): string => {
  return record.id?.toString() || String(record.id);
};
