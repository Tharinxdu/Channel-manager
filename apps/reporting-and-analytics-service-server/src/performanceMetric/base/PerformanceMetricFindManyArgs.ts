/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PerformanceMetricWhereInput } from "./PerformanceMetricWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PerformanceMetricOrderByInput } from "./PerformanceMetricOrderByInput";

@ArgsType()
class PerformanceMetricFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PerformanceMetricWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PerformanceMetricWhereInput, { nullable: true })
  @Type(() => PerformanceMetricWhereInput)
  where?: PerformanceMetricWhereInput;

  @ApiProperty({
    required: false,
    type: [PerformanceMetricOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PerformanceMetricOrderByInput], { nullable: true })
  @Type(() => PerformanceMetricOrderByInput)
  orderBy?: Array<PerformanceMetricOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PerformanceMetricFindManyArgs as PerformanceMetricFindManyArgs };