import { Booking } from "../booking/Booking";

export type Room = {
  bookings?: Array<Booking>;
  capacity: number | null;
  createdAt: Date;
  floor: number | null;
  id: string;
  numberField: number | null;
  updatedAt: Date;
};
