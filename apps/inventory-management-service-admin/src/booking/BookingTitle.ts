import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "customerName";

export const BookingTitle = (record: TBooking): string => {
  return record.customerName?.toString() || String(record.id);
};
