import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
