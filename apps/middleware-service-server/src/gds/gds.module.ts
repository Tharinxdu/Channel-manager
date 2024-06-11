import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GdsModuleBase } from "./base/gds.module.base";
import { GdsService } from "./gds.service";
import { GdsController } from "./gds.controller";
import { GdsResolver } from "./gds.resolver";

@Module({
  imports: [GdsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GdsController],
  providers: [GdsService, GdsResolver],
  exports: [GdsService],
})
export class GdsModule {}
