import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export namespace CouponTypeUsecaseDTO {
  export type Create = Partial<
    Pick<
      CouponTypeDomain.Property,
      'flat_price' | 'discount_price' | 'discount_rate'
    >
  >;
  export type FindOne = Pick<CouponTypeDomain.Property, 'id'>;
}
