import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RevenueModuleBase } from "./base/revenue.module.base";
import { RevenueService } from "./revenue.service";
import { RevenueController } from "./revenue.controller";
import { RevenueResolver } from "./revenue.resolver";

@Module({
  imports: [RevenueModuleBase, forwardRef(() => AuthModule)],
  controllers: [RevenueController],
  providers: [RevenueService, RevenueResolver],
  exports: [RevenueService],
})
export class RevenueModule {}
