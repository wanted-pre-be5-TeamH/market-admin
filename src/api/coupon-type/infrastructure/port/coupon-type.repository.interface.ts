import { IBaseRepository } from 'src/api/common/interface/base-repository.interface';
import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export type ICouponTypeRepository = IBaseRepository<
  CouponTypeDomain.Id,
  CouponTypeDomain.Aggregate
>;
