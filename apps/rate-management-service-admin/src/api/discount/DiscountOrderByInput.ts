import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
