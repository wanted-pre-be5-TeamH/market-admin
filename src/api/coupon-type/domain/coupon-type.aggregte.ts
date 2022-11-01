import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { CouponTypeDomain } from './coupon-type.interface';

export class CouponType
  extends BaseAggregate<CouponTypeDomain.Id>
  implements CouponTypeDomain.Static<typeof CouponType>
{
  flat_price: number;
  discount_price: number;
  discount_rate: number;
  static get: (props: CouponTypeDomain.Props) => CouponTypeDomain.Aggregate;
  getResponse: () => CouponTypeDomain.Response;
  caculateDiscountedPrice: (price: number) => number;
}
