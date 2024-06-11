import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RatePlanModuleBase } from "./base/ratePlan.module.base";
import { RatePlanService } from "./ratePlan.service";
import { RatePlanController } from "./ratePlan.controller";
import { RatePlanResolver } from "./ratePlan.resolver";

@Module({
  imports: [RatePlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [RatePlanController],
  providers: [RatePlanService, RatePlanResolver],
  exports: [RatePlanService],
})
export class RatePlanModule {}
