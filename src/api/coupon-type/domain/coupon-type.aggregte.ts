import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { CouponTypeDomain } from './coupon-type.interface';

export class CouponType
  extends BaseAggregate<CouponTypeDomain.Id>
  implements CouponTypeDomain.Static<typeof CouponType>
{
  constructor(
    id: CouponTypeDomain.Id,
    created_at: Date,
    updated_at: Date,
    readonly flat_price: number,
    readonly discount_price: number,
    readonly discount_rate: number,
  ) {
    super(id, created_at, updated_at);
  }

  static get(props: CouponTypeDomain.Props): CouponTypeDomain.Aggregate {
    const {
      id,
      created_at,
      updated_at,
      flat_price,
      discount_price,
      discount_rate,
    } = props;
    const now = new Date();
    return new CouponType(
      id ?? 0,
      created_at ?? now,
      updated_at ?? now,
      flat_price,
      discount_price,
      discount_rate,
    );
  }

  static calculateDiscountedPrice(
    price: number,
    coupon: Pick<
      CouponTypeDomain.Property,
      'flat_price' | 'discount_price' | 'discount_rate'
    >,
  ): number {
    const { flat_price, discount_price, discount_rate } = coupon;
    let discounted = price;
    if (discounted >= flat_price) {
      discounted = (discounted - discount_price) * discount_rate;
      if (discounted < 0) {
        discounted = 0;
      }
    }
    return discounted;
  }

  getResponse(): CouponTypeDomain.Response {
    const { id, flat_price, discount_price, discount_rate } = this;
    return { id, flat_price, discount_price, discount_rate };
  }
}
