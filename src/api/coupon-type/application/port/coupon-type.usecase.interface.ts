import { CouponTypeDomain } from '../../domain/coupon-type.interface';
import { CouponTypeApplication } from '../dto/coupon-type.dto';

export interface ICouponTypeUsecase {
  create: (
    dto: CouponTypeApplication.CreateUsecaseDTO,
  ) => Promise<CouponTypeDomain.Response>;

  findOne: (id: CouponTypeDomain.Id) => Promise<CouponTypeDomain.Response>;
}
