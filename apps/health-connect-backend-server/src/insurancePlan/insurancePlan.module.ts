import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InsurancePlanModuleBase } from "./base/insurancePlan.module.base";
import { InsurancePlanService } from "./insurancePlan.service";
import { InsurancePlanController } from "./insurancePlan.controller";
import { InsurancePlanResolver } from "./insurancePlan.resolver";

@Module({
  imports: [InsurancePlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [InsurancePlanController],
  providers: [InsurancePlanService, InsurancePlanResolver],
  exports: [InsurancePlanService],
})
export class InsurancePlanModule {}
