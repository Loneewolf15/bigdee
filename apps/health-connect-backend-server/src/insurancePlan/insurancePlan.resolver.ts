import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InsurancePlanResolverBase } from "./base/insurancePlan.resolver.base";
import { InsurancePlan } from "./base/InsurancePlan";
import { InsurancePlanService } from "./insurancePlan.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InsurancePlan)
export class InsurancePlanResolver extends InsurancePlanResolverBase {
  constructor(
    protected readonly service: InsurancePlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
