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
    readonly count_used: number,
    readonly count_unused: number,
    readonly total_discounted_price: number,
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
      count_used,
      count_unused,
      total_discounted_price,
    } = props;
    const now = new Date();
    return new CouponType(
      id ?? 0,
      created_at ?? now,
      updated_at ?? now,
      flat_price,
      discount_price,
      discount_rate,
      count_used ?? 0,
      count_unused ?? 0,
      total_discounted_price ?? 0,
    );
  }

  getResponse(): CouponTypeDomain.Response {
    const {
      id,
      flat_price,
      discount_price,
      discount_rate,
      count_unused,
      count_used,
      total_discounted_price,
    } = this;
    return {
      id,
      flat_price,
      discount_price,
      discount_rate,
      count_unused,
      count_used,
      total_discounted_price,
    };
  }
}
