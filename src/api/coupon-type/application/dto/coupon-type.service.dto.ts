import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export namespace CouponTypeServiceDTO {
  export type FindOne = Pick<CouponTypeDomain.Property, 'id'>;
}
