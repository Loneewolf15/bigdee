import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InsurancePlanService } from "./insurancePlan.service";
import { InsurancePlanControllerBase } from "./base/insurancePlan.controller.base";

@swagger.ApiTags("insurancePlans")
@common.Controller("insurancePlans")
export class InsurancePlanController extends InsurancePlanControllerBase {
  constructor(
    protected readonly service: InsurancePlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
