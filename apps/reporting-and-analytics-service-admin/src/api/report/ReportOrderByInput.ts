import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
