import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PerformanceMetricWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  metricName?: StringNullableFilter;
  value?: FloatNullableFilter;
};
