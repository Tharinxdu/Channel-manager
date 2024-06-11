import { Room } from "../room/Room";

export type Booking = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customerName: string | null;
  id: string;
  room?: Room | null;
  updatedAt: Date;
};
