import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CouponTypeModule } from './coupon-type/coupon-type.module';
import { CouponModule } from './coupon/coupon.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, CouponTypeModule, CouponModule],
})
export class ApiModule {}
