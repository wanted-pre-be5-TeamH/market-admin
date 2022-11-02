import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { CouponTypeDomain } from 'src/api/coupon-type/domain/coupon-type.interface';
import { CouponDomain } from './coupon.interface';

export class Coupon
  extends BaseAggregate<CouponDomain.Id>
  implements CouponDomain.Static<typeof Coupon>
{
  private constructor(
    id: CouponDomain.Id,
    created_at: Date,
    updated_at: Date,
    readonly code: string,
    readonly coupon_type_id: CouponTypeDomain.Id,
    readonly coupon_type: CouponDomain.CouponType,
    readonly discounted_price: number,
    readonly active: boolean,
  ) {
    super(id, created_at, updated_at);
  }

  getResponse(): CouponDomain.Response {
    const { id, code, coupon_type, active, discounted_price } = this;
    return { id, code, coupon_type, discounted_price, active };
  }

  static get(props: CouponDomain.Props): CouponDomain.Aggregate {
    const {
      id,
      created_at,
      updated_at,
      code,
      coupon_type_id,
      coupon_type,
      discounted_price,
      active,
    } = props;
    const now = new Date();
    return new Coupon(
      id ?? 0,
      created_at ?? now,
      updated_at ?? now,
      code,
      coupon_type_id,
      coupon_type,
      discounted_price ?? 0,
      active ?? true,
    );
  }

  static createCode(): string {
    return Math.random().toString(36).substring(2, 12);
  }

  static calculateDiscountedPrice(
    price: number,
    { flat_price, discount_price, discount_rate }: CouponDomain.CouponType,
  ): number {
    let discounted = price;
    if (price >= flat_price) {
      discounted -= discount_price;
      if (discounted < 0) {
        discounted = 0;
      }
      discounted *= 1 - discount_rate;
    }
    return discounted;
  }
}
