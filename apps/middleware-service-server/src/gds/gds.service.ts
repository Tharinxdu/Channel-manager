import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GdsServiceBase } from "./base/gds.service.base";

@Injectable()
export class GdsService extends GdsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
