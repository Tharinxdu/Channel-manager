import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  floor?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};
