import { GdsWhereInput } from "./GdsWhereInput";
import { GdsOrderByInput } from "./GdsOrderByInput";

export type GdsFindManyArgs = {
  where?: GdsWhereInput;
  orderBy?: Array<GdsOrderByInput>;
  skip?: number;
  take?: number;
};
