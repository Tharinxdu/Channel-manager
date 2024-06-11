import { RatePlanWhereInput } from "./RatePlanWhereInput";
import { RatePlanOrderByInput } from "./RatePlanOrderByInput";

export type RatePlanFindManyArgs = {
  where?: RatePlanWhereInput;
  orderBy?: Array<RatePlanOrderByInput>;
  skip?: number;
  take?: number;
};
