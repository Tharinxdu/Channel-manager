import { RevenueWhereInput } from "./RevenueWhereInput";
import { RevenueOrderByInput } from "./RevenueOrderByInput";

export type RevenueFindManyArgs = {
  where?: RevenueWhereInput;
  orderBy?: Array<RevenueOrderByInput>;
  skip?: number;
  take?: number;
};
