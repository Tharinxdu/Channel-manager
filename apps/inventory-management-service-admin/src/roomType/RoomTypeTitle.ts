import { RoomType as TRoomType } from "../api/roomType/RoomType";

export const ROOMTYPE_TITLE_FIELD = "typeName";

export const RoomTypeTitle = (record: TRoomType): string => {
  return record.typeName?.toString() || String(record.id);
};
