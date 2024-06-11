import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformanceMetricModuleBase } from "./base/performanceMetric.module.base";
import { PerformanceMetricService } from "./performanceMetric.service";
import { PerformanceMetricController } from "./performanceMetric.controller";
import { PerformanceMetricResolver } from "./performanceMetric.resolver";

@Module({
  imports: [PerformanceMetricModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformanceMetricController],
  providers: [PerformanceMetricService, PerformanceMetricResolver],
  exports: [PerformanceMetricService],
})
export class PerformanceMetricModule {}
