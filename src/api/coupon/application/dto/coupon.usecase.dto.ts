import { CouponTypeDomain } from 'src/api/coupon-type/domain/coupon-type.interface';

export namespace CouponUsecaseDTO {
  export type Create = {
    coupon_type_id: CouponTypeDomain.Id;
  };
  export type FindOne = {
    code: string;
  };
}
