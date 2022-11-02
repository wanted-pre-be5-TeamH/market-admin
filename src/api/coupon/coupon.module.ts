import { Module } from '@nestjs/common';
import { CouponTypeModule } from '../coupon-type/coupon-type.module';
import { CouponService } from './application/adapter/coupon.service';
import { CouponUsecase } from './application/adapter/coupon.usecase';
import { CouponEntityMapper } from './infrastructure/adapter/coupon.mapper';
import { CouponRepository } from './infrastructure/adapter/coupon.repository';
import { CouponController } from './presentation/coupon.controller';

@Module({
  imports: [CouponTypeModule],
  providers: [
    CouponEntityMapper,
    CouponRepository,
    CouponService,
    CouponUsecase,
  ],
  controllers: [CouponController],
  exports: [CouponService],
})
export class CouponModule {}
