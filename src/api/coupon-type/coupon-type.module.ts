import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponTypeService } from './application/adapter/coupon-type.service';
import { CouponTypeUsecase } from './application/adapter/coupon-type.usecase';
import { CouponTypeEntityMapper } from './infrastructure/adapter/coupon-type.mapper';
import { CouponTypeRepository } from './infrastructure/adapter/coupon-type.repository';
import { CouponTypeEntity } from './infrastructure/model/coupon-type.entity';
import { CouponTypeController } from './presentation/coupon-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CouponTypeEntity])],
  providers: [
    CouponTypeEntityMapper,
    CouponTypeRepository,
    CouponTypeService,
    CouponTypeUsecase,
  ],
  controllers: [CouponTypeController],
  exports: [CouponTypeService],
})
export class CouponTypeModule {}
