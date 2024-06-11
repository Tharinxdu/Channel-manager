import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OtaService } from "./ota.service";
import { OtaControllerBase } from "./base/ota.controller.base";

@swagger.ApiTags("otas")
@common.Controller("otas")
export class OtaController extends OtaControllerBase {
  constructor(
    protected readonly service: OtaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
