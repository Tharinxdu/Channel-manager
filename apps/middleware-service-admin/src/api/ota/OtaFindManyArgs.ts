import { OtaWhereInput } from "./OtaWhereInput";
import { OtaOrderByInput } from "./OtaOrderByInput";

export type OtaFindManyArgs = {
  where?: OtaWhereInput;
  orderBy?: Array<OtaOrderByInput>;
  skip?: number;
  take?: number;
};
