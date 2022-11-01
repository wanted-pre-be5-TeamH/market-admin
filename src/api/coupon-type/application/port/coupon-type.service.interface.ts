import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export interface ICouponTypeService {
  findOne: (id: CouponTypeDomain.Id) => Promise<CouponTypeDomain.Aggregate>;
  calculateDiscountedPrice: (
    price: number,
    coupon: Pick<
      CouponTypeDomain.Property,
      'flat_price' | 'discount_price' | 'discount_rate'
    > & { price: number },
  ) => number;
}
