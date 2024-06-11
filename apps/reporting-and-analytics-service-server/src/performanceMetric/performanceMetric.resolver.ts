import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PerformanceMetricResolverBase } from "./base/performanceMetric.resolver.base";
import { PerformanceMetric } from "./base/PerformanceMetric";
import { PerformanceMetricService } from "./performanceMetric.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PerformanceMetric)
export class PerformanceMetricResolver extends PerformanceMetricResolverBase {
  constructor(
    protected readonly service: PerformanceMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
