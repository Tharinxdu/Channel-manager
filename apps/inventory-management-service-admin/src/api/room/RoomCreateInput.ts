import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  capacity?: number | null;
  floor?: number | null;
  numberField?: number | null;
};
