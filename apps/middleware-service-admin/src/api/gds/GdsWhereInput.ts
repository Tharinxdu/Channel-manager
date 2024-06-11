import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GdsWhereInput = {
  apiKey?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
