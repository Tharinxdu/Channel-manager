import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OtaModuleBase } from "./base/ota.module.base";
import { OtaService } from "./ota.service";
import { OtaController } from "./ota.controller";
import { OtaResolver } from "./ota.resolver";

@Module({
  imports: [OtaModuleBase, forwardRef(() => AuthModule)],
  controllers: [OtaController],
  providers: [OtaService, OtaResolver],
  exports: [OtaService],
})
export class OtaModule {}
