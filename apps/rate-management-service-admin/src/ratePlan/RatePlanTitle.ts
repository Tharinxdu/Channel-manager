import { RatePlan as TRatePlan } from "../api/ratePlan/RatePlan";

export const RATEPLAN_TITLE_FIELD = "name";

export const RatePlanTitle = (record: TRatePlan): string => {
  return record.name?.toString() || String(record.id);
};
