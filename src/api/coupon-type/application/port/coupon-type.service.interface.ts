import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export interface ICouponTypeService {
  findOne: (id: CouponTypeDomain.Id) => CouponTypeDomain.Aggregate;
}
