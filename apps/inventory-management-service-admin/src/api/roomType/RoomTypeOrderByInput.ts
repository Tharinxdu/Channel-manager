import { SortOrder } from "../../util/SortOrder";

export type RoomTypeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  rate?: SortOrder;
  typeName?: SortOrder;
  updatedAt?: SortOrder;
};
