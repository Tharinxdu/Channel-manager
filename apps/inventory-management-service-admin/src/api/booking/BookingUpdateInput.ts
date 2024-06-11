import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customerName?: string | null;
  room?: RoomWhereUniqueInput | null;
};
