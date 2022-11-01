import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CouponTypeUsecase } from '../application/adapter/coupon-type.usecase';
import { ICouponTypeUsecase } from '../application/port/coupon-type.usecase.interface';
import {
  CreateCouponTypeBody,
  FindOneCouponTypeParam,
} from './coupon-type.dto';

@Controller('coupon-types')
export class CouponTypeController {
  constructor(
    @Inject(CouponTypeUsecase)
    private readonly couponTypeUsecase: ICouponTypeUsecase,
  ) {}

  @Get(':coupon_type_id')
  findOne(@Param() { coupon_type_id: id }: FindOneCouponTypeParam) {
    return this.couponTypeUsecase.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCouponTypeBody) {
    const { discount_price, discount_rate, flat_price } = body;
    return this.couponTypeUsecase.create({
      flat_price,
      discount_price,
      discount_rate,
    });
  }
}
