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
import { OtaService } from "../ota.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OtaCreateInput } from "./OtaCreateInput";
import { Ota } from "./Ota";
import { OtaFindManyArgs } from "./OtaFindManyArgs";
import { OtaWhereUniqueInput } from "./OtaWhereUniqueInput";
import { OtaUpdateInput } from "./OtaUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OtaControllerBase {
  constructor(
    protected readonly service: OtaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ota })
  @nestAccessControl.UseRoles({
    resource: "Ota",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOta(@common.Body() data: OtaCreateInput): Promise<Ota> {
    return await this.service.createOta({
      data: data,
      select: {
        apiKey: true,
        createdAt: true,
        endpoint: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ota] })
  @ApiNestedQuery(OtaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ota",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async otas(@common.Req() request: Request): Promise<Ota[]> {
    const args = plainToClass(OtaFindManyArgs, request.query);
    return this.service.otas({
      ...args,
      select: {
        apiKey: true,
        createdAt: true,
        endpoint: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ota })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ota",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ota(@common.Param() params: OtaWhereUniqueInput): Promise<Ota | null> {
    const result = await this.service.ota({
      where: params,
      select: {
        apiKey: true,
        createdAt: true,
        endpoint: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Ota })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ota",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOta(
    @common.Param() params: OtaWhereUniqueInput,
    @common.Body() data: OtaUpdateInput
  ): Promise<Ota | null> {
    try {
      return await this.service.updateOta({
        where: params,
        data: data,
        select: {
          apiKey: true,
          createdAt: true,
          endpoint: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Ota })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ota",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOta(
    @common.Param() params: OtaWhereUniqueInput
  ): Promise<Ota | null> {
    try {
      return await this.service.deleteOta({
        where: params,
        select: {
          apiKey: true,
          createdAt: true,
          endpoint: true,
          id: true,
          name: true,
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
