import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RoomTypeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  rate?: FloatNullableFilter;
  typeName?: StringNullableFilter;
};
