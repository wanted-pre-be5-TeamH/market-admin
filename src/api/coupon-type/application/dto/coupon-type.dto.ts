import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export namespace CouponTypeApplication {
  export type CreateUsecaseDTO = Partial<
    Pick<
      CouponTypeDomain.Property,
      'flat_price' | 'discount_price' | 'discount_rate'
    >
  >;
}
