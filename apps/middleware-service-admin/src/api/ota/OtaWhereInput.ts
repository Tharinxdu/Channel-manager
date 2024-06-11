import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OtaWhereInput = {
  apiKey?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
