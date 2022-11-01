import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Role } from 'src/api/auth/provider/decorator/role.decorator';
import { UserRole } from 'src/api/user/domain/user.enum';
import { CouponTypeUsecase } from '../application/adapter/coupon-type.usecase';
import { ICouponTypeUsecase } from '../application/port/coupon-type.usecase.interface';
import { CouponTypeResponseInterceptor } from '../provider/coupon-type.intercepter';
import {
  CreateCouponTypeBody,
  FindOneCouponTypeParam,
} from './coupon-type.dto';

@Role(UserRole.Seller)
@UseInterceptors(CouponTypeResponseInterceptor)
@Controller('coupon-types')
export class CouponTypeController {
  constructor(
    @Inject(CouponTypeUsecase)
    private readonly couponTypeUsecase: ICouponTypeUsecase,
  ) {}

  @Get()
  findMany() {
    return this.couponTypeUsecase.findMany();
  }

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
