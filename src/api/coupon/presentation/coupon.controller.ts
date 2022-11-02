import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CouponUsecase } from '../application/adapter/coupon.usecase';
import { ICouponUsecase } from '../application/port/coupon.usecase.interface';
import { CouponResponseInterceptor } from '../provider/coupon.intercepter';
import { CreateCouponBody, FindOneCouponParam } from './coupon.controller.dto';

@UseInterceptors(CouponResponseInterceptor)
@Controller('coupons')
export class CouponController {
  constructor(
    @Inject(CouponUsecase)
    private readonly couponUsecase: ICouponUsecase,
  ) {}

  @Get()
  findMany() {
    return this.couponUsecase.findMany();
  }

  @Get(':coupon_code')
  findOne(@Param() { coupon_code: code }: FindOneCouponParam) {
    return this.couponUsecase.findOne({ code });
  }

  @Post()
  create(@Body() { coupon_type_id }: CreateCouponBody) {
    return this.couponUsecase.create({ coupon_type_id });
  }
}
