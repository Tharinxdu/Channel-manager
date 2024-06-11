import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RatePlanServiceBase } from "./base/ratePlan.service.base";

@Injectable()
export class RatePlanService extends RatePlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
