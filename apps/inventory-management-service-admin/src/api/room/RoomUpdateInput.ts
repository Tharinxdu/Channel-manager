import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  capacity?: number | null;
  floor?: number | null;
  numberField?: number | null;
};
