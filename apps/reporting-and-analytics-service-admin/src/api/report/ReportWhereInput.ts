import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
