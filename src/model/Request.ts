import { RequestMethodEnum } from "./RequestMethodEnum";
import { RequestObject } from "./RequestMethod";

export type Request = Record<RequestMethodEnum, RequestObject>
