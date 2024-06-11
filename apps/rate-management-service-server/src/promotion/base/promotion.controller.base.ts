/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PromotionService } from "../promotion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PromotionCreateInput } from "./PromotionCreateInput";
import { Promotion } from "./Promotion";
import { PromotionFindManyArgs } from "./PromotionFindManyArgs";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { PromotionUpdateInput } from "./PromotionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PromotionControllerBase {
  constructor(
    protected readonly service: PromotionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Promotion })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPromotion(
    @common.Body() data: PromotionCreateInput
  ): Promise<Promotion> {
    return await this.service.createPromotion({
      data: data,
      select: {
        createdAt: true,
        description: true,
        discountRate: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Promotion] })
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async promotions(@common.Req() request: Request): Promise<Promotion[]> {
    const args = plainToClass(PromotionFindManyArgs, request.query);
    return this.service.promotions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        discountRate: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async promotion(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    const result = await this.service.promotion({
      where: params,
      select: {
        createdAt: true,
        description: true,
        discountRate: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePromotion(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() data: PromotionUpdateInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.updatePromotion({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          discountRate: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePromotion(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.deletePromotion({
        where: params,
        select: {
          createdAt: true,
          description: true,
          discountRate: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}