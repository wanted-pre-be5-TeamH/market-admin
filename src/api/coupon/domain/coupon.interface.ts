import { BaseAggregate } from 'src/api/common/base/base-aggregate';
import { Implements } from 'src/api/common/interface/class.interface';
import { CouponTypeDomain } from 'src/api/coupon-type/domain/coupon-type.interface';

export namespace CouponDomain {
  export type Id = number;

  export type CouponType = Pick<
    CouponTypeDomain.Response,
    'discount_price' | 'discount_rate' | 'flat_price'
  >;

  export interface Property extends BaseAggregate<Id> {
    readonly code: string;
    readonly coupon_type_id: CouponTypeDomain.Id;
    readonly coupon_type: CouponType;
    readonly active: boolean;
    readonly discounted_price: number;
  }
  export type Response = Pick<
    Property,
    'id' | 'code' | 'coupon_type' | 'active' | 'discounted_price'
  >;
  interface Method {
    getResponse: () => Response;
  }
  export type Aggregate = Property & Method;

  export type Props = Pick<
    Property,
    'coupon_type_id' | 'coupon_type' | 'code'
  > &
    Partial<
      Pick<
        Property,
        'id' | 'created_at' | 'updated_at' | 'active' | 'discounted_price'
      >
    >;

  interface StaticMethod {
    get: (props: Props) => Aggregate;
    createCode: () => string;
    calculateDiscountedPrice: (price: number, coupon: CouponType) => number;
  }

  export type Static<C extends StaticMethod> = Implements<
    Aggregate,
    StaticMethod,
    C
  >;
}
