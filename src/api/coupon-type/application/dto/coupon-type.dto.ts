import { CouponTypeDomain } from '../../domain/coupon-type.interface';

export namespace CouponTypeApplication {
  export type CreateUsecaseDTO = Partial<
    Pick<
      CouponTypeDomain.Property,
      'flat_price' | 'discount_price' | 'discount_rate'
    >
  >;
  export interface FindManyUsecaseResponse extends CouponTypeDomain.Response {
    count_created: number; // 생성된 쿠폰 수
    count_useed: number; // 사용된 쿠폰 수
    total_discounted_price: number; // 총 할인 금액
  }
}
