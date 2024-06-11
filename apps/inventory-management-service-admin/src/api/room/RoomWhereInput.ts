import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  capacity?: IntNullableFilter;
  floor?: IntNullableFilter;
  id?: StringFilter;
  numberField?: IntNullableFilter;
};
