import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
};
