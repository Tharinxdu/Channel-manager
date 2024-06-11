/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Revenue } from "./Revenue";
import { RevenueCountArgs } from "./RevenueCountArgs";
import { RevenueFindManyArgs } from "./RevenueFindManyArgs";
import { RevenueFindUniqueArgs } from "./RevenueFindUniqueArgs";
import { CreateRevenueArgs } from "./CreateRevenueArgs";
import { UpdateRevenueArgs } from "./UpdateRevenueArgs";
import { DeleteRevenueArgs } from "./DeleteRevenueArgs";
import { RevenueService } from "../revenue.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Revenue)
export class RevenueResolverBase {
  constructor(
    protected readonly service: RevenueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "read",
    possession: "any",
  })
  async _revenuesMeta(
    @graphql.Args() args: RevenueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Revenue])
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "read",
    possession: "any",
  })
  async revenues(
    @graphql.Args() args: RevenueFindManyArgs
  ): Promise<Revenue[]> {
    return this.service.revenues(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Revenue, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "read",
    possession: "own",
  })
  async revenue(
    @graphql.Args() args: RevenueFindUniqueArgs
  ): Promise<Revenue | null> {
    const result = await this.service.revenue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Revenue)
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "create",
    possession: "any",
  })
  async createRevenue(
    @graphql.Args() args: CreateRevenueArgs
  ): Promise<Revenue> {
    return await this.service.createRevenue({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Revenue)
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "update",
    possession: "any",
  })
  async updateRevenue(
    @graphql.Args() args: UpdateRevenueArgs
  ): Promise<Revenue | null> {
    try {
      return await this.service.updateRevenue({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Revenue)
  @nestAccessControl.UseRoles({
    resource: "Revenue",
    action: "delete",
    possession: "any",
  })
  async deleteRevenue(
    @graphql.Args() args: DeleteRevenueArgs
  ): Promise<Revenue | null> {
    try {
      return await this.service.deleteRevenue(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
