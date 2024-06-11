import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RevenueServiceBase } from "./base/revenue.service.base";

@Injectable()
export class RevenueService extends RevenueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
