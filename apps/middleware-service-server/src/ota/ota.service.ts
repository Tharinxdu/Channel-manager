import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtaServiceBase } from "./base/ota.service.base";

@Injectable()
export class OtaService extends OtaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
